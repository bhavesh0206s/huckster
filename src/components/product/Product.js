import React, { useState } from 'react';
import './product.css'
import YourProductDetails from '../yourProduct/YourProductDetail';

const ProductList = (props) => {
  const [isDetail , setIsDetail] = useState(false)

  const toggleDetail = () => {
    setIsDetail(!isDetail)
  } 

  return (
    <div>
    <div style={{margin: "100"}}>
        {isDetail ? (
          <YourProductDetails price={props.pricePerItem} imageUrl={props.imageUrl} productName={props.productName} productDetails={props.productDetails}  toggleDetail={toggleDetail}/>
        ) : null}
      </div>
    <div className="card">
        <div className="card-content" >
        <figure class="image is-4by3">
            <img id="product-img" src={props.imageUrl} alt={props.productName} />
        </figure>
        </div>
        <div style={{display:"flex" ,justifyContent:"space-around"}}> 
          <div className="subtitle product-name" onClick={toggleDetail}>
            {props.productName}
          </div>
          <div className="subtitle">
            <strong>
              &#8377;
              {props.pricePerItem}
            </strong>
          </div>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <button onClick={props.handleBuyNow} className="button is-primary is-inverted is-outlined buy-now" style={{backgroundColor:"#758184", color:'antiquewhite'}}>
              Buy Now
            </button>
          </p>
          <p className="card-footer-item">
            <button onClick={props.handleAddtoCart} className="button is-primary add-to-cart" style={{backgroundColor:"#5d5b6a", color:'antiquewhite'}}>
              Add to Cart
            </button>
          </p>
        </footer>
      </div>
    </div>
  );
}
 
export default ProductList;
