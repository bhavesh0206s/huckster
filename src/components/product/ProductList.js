import React, { useState } from 'react';
import Product from './Product'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './product.css'
import { ProductContext } from '../../context/ProductContext';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Search from '../search/Search';

const ProductList = (props) => {

  const {currentUser} = useContext(AuthContext);
  const {input, productInfo, searchResult, searchInput} = useContext(ProductContext);

  const handleAddtoCart = () => {
    if(!currentUser){
      props.history.push('/signin')
    }
    else{
      
    }
  }

  const handleBuyNow = () => {
    if(!currentUser){
      props.history.push('/signin')
    }
    else{
      alert('Thank You')
    }
  }

  return (
    <div>
      <div className="product-home"></div>
        <Search searchInput={searchInput}/>
        <div className="grid" >
          {input === '' ? (
            productInfo.map(info => 
              <Product 
                key={info.id}
                pricePerItem={info.price_per_item} 
                productName={info.product_name} 
                imageUrl={info.image_url} 
                productDetails={info.product_details}
                handleAddtoCart={handleAddtoCart}
                handleBuyNow={handleBuyNow} 
              />
            )  
          ) : (
            searchResult.map(info => 
              <Product 
                key={info.id}
                pricePerItem={info.price_per_item} 
                productName={info.product_name} 
                imageUrl={info.image_url} 
                productDetails={info.product_details}
                handleAddtoCart={handleAddtoCart}
                handleBuyNow={handleBuyNow} 
              />
            ) 
          )}
        </div>
    </div>
  );
}
 
export default ProductList;