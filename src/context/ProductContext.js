import React, { createContext, useEffect, useState } from 'react';
import { fireDb } from '../firebase';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [productInfo, setProductInfo] = useState([]);
  const [input ,setInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [productNameForCart, setProductNameForCart] = useState([]);
  const [priceOfItem, setPriceOfItem] = useState([]);

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

  const deleteItem = (e) =>{
    let target = e.target.value
    let productNameForCartNew = productNameForCart.filter((item)=> item !== productNameForCart[target])
    let priceOfItemNew = priceOfItem.filter((item)=> item !== priceOfItem[target])
    setPriceOfItem(priceOfItemNew)
    setProductNameForCart(productNameForCartNew)
  }

  useEffect(()=>{
    updateProductList();
  },[]);

  return (
    <ProductContext.Provider value={{input, searchInput, deleteItem,productInfo, searchResult,productNameForCart, setProductNameForCart,priceOfItem, setPriceOfItem}}>
      {props.children}
    </ProductContext.Provider>
  );
}
 
export default ProductContextProvider;