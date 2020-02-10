import React, { useState } from 'react';
import Product from './Product'
import { useContext } from 'react';
import './product.css'
import { ProductContext } from '../../context/ProductContext';
import Search from '../search/Search';

const ProductList = (props) => {

  const {input, productInfo, searchResult, searchInput} = useContext(ProductContext);

  const gotoSignIn = () => {
    props.history.push('/signin')
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
                gotoSignIn={gotoSignIn}
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
                gotoSignIn={gotoSignIn}
              />
            ) 
          )}
        </div>
    </div>
  );
}
 
export default ProductList;