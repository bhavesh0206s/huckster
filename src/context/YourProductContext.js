import React, { useState } from 'react';
import { createContext } from 'react';
import fire, { fireDb } from '../firebase';


export const YourProductContext = createContext();

const YourProductContextProvider = (props) => {

  const [yourProductInfo, setYourProductInfo] = useState([]);

  
  const updateYourProductList = () =>{
    let userid =  fire.auth().currentUser.uid
    let productRef = fireDb.collection('user').doc(`${userid}`);
    productRef.collection('product-info').onSnapshot(snap => {
      const productData = snap.docs.map(doc =>({
        id : doc.id,
        ...doc.data()
      }));
      setYourProductInfo(productData)
    }, err => console.log(err))
  }

  const deleteItem = (e) =>{
    let userid =  fire.auth().currentUser.uid

    let docId = e.target.value;

    let productRef = fireDb.collection('user').doc(`${userid}`);
    productRef.collection('product-info').doc(docId).delete().then(()=>{
    }).catch(e=>console.log(e))

    let publicProductRef = fireDb.collection('public-product-info')
    publicProductRef.doc(docId).delete().then(()=>{
    }).catch(e=>console.log(e))
  }

  return (
    <YourProductContext.Provider value={{updateYourProductList, deleteItem, yourProductInfo}}>
      {props.children}
    </YourProductContext.Provider>
  );
}
 
export default YourProductContextProvider;