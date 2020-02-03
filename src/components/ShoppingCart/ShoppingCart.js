import React, {useState} from 'react';
import './shoppingcart.css'

const ShoppingCart = (props) => {
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
              Price
            </div>
          </div>
          <div className="products">
            <div>
            dasd
              {props.addedItem}
            </div>
            <div>
            dasd
              {props.priceOfItem}
            </div>
          </div>
        </div>
      ): null}
    </div>
  );
}
 
export default ShoppingCart;