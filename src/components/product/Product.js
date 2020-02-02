import React from 'react';
import './product.css'

const ProductList = (props) => {

  return (
    <div className="card">
          <div className="card-content">
            <p className="title">
              <img src={props.imageUrl} alt={props.productName} width="300" height="200"/>
            </p>
          </div>
          <div style={{display:"flex", justifyContent:"space-around"}}>
            <p className="subtitle">
              {props.productName}
            </p>
            <p className="subtitle">
              <strong>
                &#8377;
                {props.pricePerItem}
              </strong>
            </p>
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
  );
}
 
export default ProductList;
