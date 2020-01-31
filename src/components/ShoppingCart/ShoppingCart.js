import React, {useState} from 'react';
import './shoppingcart.css'

const ShoppingCart = () => {
  const [isCartClicked, setCartClicked] = useState(false);
  const toggleCart = ()=>{
      setCartClicked(!isCartClicked)
    }

  return (
    <div style={{cursor:"pointer"}} onClick={toggleCart}>
      <div className="button shop-cart">
        <img src="https://img.icons8.com/pastel-glyph/40/000000/shopping-cart--v1.png" alt="cart" />
      </div>
      {isCartClicked ? (
        <div className="box animated fadeIn" id="cart">
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
      ): null}
    </div>
  );
}
 
export default ShoppingCart;