import React, { createContext, useEffect, useState } from 'react';
import { fireDb } from '../firebase';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [productInfo, setProductInfo] = useState([]);
  
  const updateProductList = () => {
    let productRef = fireDb.collection('public-product-info')
    productRef.onSnapshot(snap => {
      const productData = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setProductInfo(productData)
      },error => console.log("Error getting document:", error))
  }


  useEffect(()=>{
    updateProductList()
  },[]);

  return (
    <ProductContext.Provider value={{productInfo}}>
      {props.children}
    </ProductContext.Provider>
  );
}
 
export default ProductContextProvider;