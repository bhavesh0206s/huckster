import React from 'react';
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

  const goUp = () =>{
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      <div className="product-home"></div>
        <Search searchInput={searchInput}/>
        <div className="grid">
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
          <div id="up-arrow" onClick={goUp}>
            <img src="https://img.icons8.com/bubbles/100/000000/long-arrow-up.png" width="70" alt='up' className="up-arrow"/>
          </div>
        </div>
    </div>
  );
}
 
export default ProductList;