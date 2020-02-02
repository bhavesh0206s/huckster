import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import fire, { fireDb } from '../firebase';
// import { storage } from 'firebase';

export const SellHereContext = createContext();

const SellHereContextProvider = (props) => {

  const [productName , setProductName]= useState('');
  const [productDetails, setProductDetails]= useState('');
  const [pricePerItem, setPricePerItem]= useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading , setIsLoading] = useState(false)

  const totalData = {
    product_name: productName,
    product_details: productDetails,
    price_per_item: pricePerItem,
    image_url: imageUrl
  }

  const addPublicProducttoDb =  (userid) =>{
    let privateProductRef = fireDb.collection('user').doc(`${userid}`).collection('product-info');
    privateProductRef.get().then(snap => {
      let getIds =  snap.docs.map(doc => ({
        id: doc.id
      }));
      console.log(getIds)
      getIds.forEach(({id}) => {
        
      })
      let publicProductRef = fireDb.collection('public-product-info').doc(getIds[getIds.length-1].id)
        publicProductRef.set(totalData)
        .then(()=> console.log('succes'))
        .catch((e)=> console.log(e))
    }, err=> console.log(err))
  }

  const addProducttoDb = () =>{
    let userid =  fire.auth().currentUser.uid
    let privateProductRef = fireDb.collection('user').doc(`${userid}`);
    privateProductRef.collection('product-info').add(totalData)
    .catch((e)=> console.log(e))
    addPublicProducttoDb(userid)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    addProducttoDb();
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
    <SellHereContext.Provider value={{isLoading,emptyAllField, setPricePerItem, setImageUrl,setProductDetails, setProductName, handleSubmit}}>
      {props.children}
    </SellHereContext.Provider>
  );
}
 
export default SellHereContextProvider;