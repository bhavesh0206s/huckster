import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import fire, { fireDb } from '../firebase';

export const SellHereContext = createContext();

const SellHereContextProvider = (props) => {

  const [productName , setProductName]= useState('');
  const [productDetails, setProductDetails]= useState('');
  const [quantity, setQuantity]= useState('');
  const [pricePerItem, setPricePerItem]= useState('');
  const [imageUrl, setImageUrl] = useState('')

  const addProductNametoDb = () =>{
    let userid =  fire.auth().currentUser.uid
    let privateProductRef = fireDb.collection('user').doc(`${userid}`);
    privateProductRef.collection('product-info').add({
      product_name: productName,
      product_details: productDetails,
      quantity: quantity,
      price_per_item: pricePerItem,
      image_url: imageUrl
    })
    .then(()=> alert('success'))
    .catch((e)=> console.log(e))

    let publicProductRef = fireDb.collection('public-product-info')
    publicProductRef.add({
      product_name: productName,
      product_details: productDetails,
      quantity: quantity,
      price_per_item: pricePerItem,
      image_url: imageUrl
    })
    .then(()=> alert('success'))
    .catch((e)=> console.log(e))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    addProductNametoDb();
    emptyAllField()
  }

  const emptyAllField = ()=>{
    let inputFields = document.querySelectorAll('.input');
    let textArea = document.querySelector('.textarea');
    textArea.value = '';
    inputFields.forEach(element => {
      element.value = '';
    });
  }

  return ( 
    <SellHereContext.Provider value={{emptyAllField, setPricePerItem, setImageUrl,setProductDetails, setProductName, setQuantity, handleSubmit}}>
      {props.children}
    </SellHereContext.Provider>
  );
}
 
export default SellHereContextProvider;