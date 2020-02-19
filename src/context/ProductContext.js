import React, { createContext, useEffect, useState } from 'react';
import fire, { fireDb } from '../firebase';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [productInfo, setProductInfo] = useState([]);
  const [input, setInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [productNameForCart, setProductNameForCart] = useState([]);
  const [priceOfItem, setPriceOfItem] = useState([]);
  const [imageUrlCheckout, setImageUrlCheckout] = useState([])
  const [buyNowData, setBuyNowData] = useState([]);
  const [cartItems, setCartItems] = useState([])
  const [isOrderClicked, setOrderClicked] = useState(false);
  const [total, setTotal] = useState(0);
  const [productCounter, setProductCounter] = useState(0);
 
  const updateProductList = () => {
    let productRef = fireDb.collection('public-product-info');
    productRef.onSnapshot(snap => {
      const productData = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setProductInfo(productData);
      },error => console.log("Error getting document:", error));
  }

  const searchInput = (e)=>{
    let inputValue =  e.target.value.toLowerCase();
    setInput(inputValue)
    let searchedProduct = productInfo.filter((info) => {
      let trimProductName = info.product_name.toLowerCase().split('').join('');
      for(let j = 0; j<trimProductName.length; j++){
        if(inputValue === trimProductName.slice(j, inputValue.length+j)){
          return true
        }
      }
    })
    setSearchResult(searchedProduct)
  }

  const buyNowClicked = (productName,pricePerItem,imageUrl,productDetails) => {
    let userid =  fire.auth().currentUser.uid;
    let fieldData = {
      productName: productName,
      pricePerItem: pricePerItem,
      imageUrl: imageUrl,
    }
    let buyProductRef = fireDb.collection('user').doc(`${userid}`);
    buyProductRef.collection('buy-now').doc('product-data').set(fieldData)
    .catch((e)=> console.log(e))    
  }

  const getBuyNowData = (userid) => {
    setCartItems([])
    let productRef = fireDb.collection('user').doc(`${userid}`).collection('buy-now').doc('product-data');
    productRef.get().then(snap => {
      const productData = snap.data()
      setBuyNowData([productData])
      },error => console.log("Error getting document:", error));
  }

  const deleteBuyNowItem = ()=>{
    let userid =  fire.auth().currentUser.uid;
    let productRef = fireDb.collection('user').doc(`${userid}`).collection('buy-now').doc('product-data');
    productRef.delete()
    .catch(e=>console.log(e))
    console.log('deleted')
    setBuyNowData([])
  }

  const addtoCartClicked = (productName,pricePerItem,imageUrl) => {
    let userid =  fire.auth().currentUser.uid;
    
    let fieldData = {
      productName: productName,
      pricePerItem: pricePerItem,
      imageUrl: imageUrl,
    }
    let buyProductRef = fireDb.collection('user').doc(`${userid}`);
    buyProductRef.collection('cart-items').add(fieldData)
    .catch((e)=> console.log(e))
  }

  const getCartData = (userid)=>{
    let productRef = fireDb.collection('user').doc(`${userid}`).collection('cart-items');
    productRef.onSnapshot(snap => {
      const productData = snap.docs.map(doc=>({
        id: doc.id,
        ...doc.data()
      }))
      setCartItems(productData)
      },error => console.log("Error getting document:", error));
  }

  const deleteCartItem = (e)=>{
    let userid =  fire.auth().currentUser.uid;
    let docId = e.currentTarget.dataset.id;
    const filterCartItems  = cartItems.filter(item => item.id !== item.docId)
    setCartItems(filterCartItems)
    let productRef = fireDb.collection('user').doc(`${userid}`).collection('cart-items').doc(docId);
    productRef.delete()
      .then(()=>{})
      .catch(e=>console.log(e))
  }

  useEffect(()=>{
    let sum  = 0;
    let count = 0;
    cartItems.forEach(element => {
      sum += Number(element.pricePerItem)
      count++
    })
    setTotal(sum)
    setProductCounter(count)
  },[cartItems])

  useEffect(()=>{
    updateProductList();
  },[]);

  return (
    <ProductContext.Provider 
      value={{
        total,
        productCounter,
        deleteCartItem,
        deleteBuyNowItem,
        cartItems,
        getBuyNowData,
        isOrderClicked, 
        setOrderClicked, 
        buyNowClicked, 
        buyNowData, 
        input, 
        searchInput, 
        productInfo, 
        searchResult,
        productNameForCart, 
        setProductNameForCart,
        priceOfItem, 
        setPriceOfItem,
        imageUrlCheckout,
        setImageUrlCheckout,
        addtoCartClicked,
        getCartData
      }}>
      {props.children}
    </ProductContext.Provider>
  );
}
 
export default ProductContextProvider;