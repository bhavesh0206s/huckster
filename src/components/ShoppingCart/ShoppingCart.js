import React from 'react';
import './shoppingcart.css'

const ShoppingCart = () => {
  return (
    <div className="box" id="cart">
      <div className="heading">
        <div>
          Items
        </div>
        <div>
          Quatity
        </div>
        <div>
          Price
        </div>
      </div>
      <div className="products">
        <div>
          Clay Art
        </div>
        <div id="quantity">
          <p className="quantiy-change">-</p>10<p className="quantiy-change">+</p> 
        </div>
        <div>
          $10
        </div>
      </div>
      
    </div>
  );
}
 
export default ShoppingCart;