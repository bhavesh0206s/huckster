import React from 'react';
import Product from './Product'
import { useContext } from 'react';
import { fireDb } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductList = () => {

  const {getUid, currentUser} = useContext(AuthContext);
  const [productInfo, setProductInfo] = useState([]);
  
  const updateProductList = () => {
    let productRef = fireDb.collection('public-product-info')
    productRef.onSnapshot(snap => {
      const productData = snap.docs.map(doc => ({
        ...doc.data()
      }))
      setProductInfo(productData)
      console.log(productData)
        
      },error => console.log("Error getting document:", error))
  }
  useEffect(()=>{
    updateProductList()
  },[]);

  return (
    <div>
      {productInfo.map(info => 
          <Product pricePerItem={info.price_per_item} productName={info.product_name} imageUrl={info.image_url} productDetails={info.product_details} />
      )}
    </div>
  );
}
 
export default ProductList;