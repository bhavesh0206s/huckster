import React from 'react';
import Product from './Product'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './product.css'
import { ProductContext } from '../../context/ProductContext';

const ProductList = (props) => {

  const {currentUser} = useContext(AuthContext);
  const {productInfo} = useContext(ProductContext)

  const handleAddtoCart = () => {
    if(!currentUser){
      props.history.push('/signin')
    }
    else{
      alert('Thank You')
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
    <div className="product-home">
      <div className="grid" >
        {productInfo.map(info => 
            <Product 
              key={info.id}
              pricePerItem={info.price_per_item} 
              productName={info.product_name} 
              imageUrl={info.image_url} 
              productDetails={info.product_details}
              handleAddtoCart={handleAddtoCart}
              handleBuyNow={handleBuyNow} 
            />
        )}  
      </div>
    </div>
  );
}
 
export default ProductList;