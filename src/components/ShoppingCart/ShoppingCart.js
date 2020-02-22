import React, {useState, Fragment} from 'react';
import './shoppingcart.css'
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ShoppingCart = (props) => {
  const {getUid} = useContext(AuthContext)
  const {cartItems, getCartData,setOrderClicked,deleteCartItem,total,productCounter} = useContext(ProductContext);
  const [isCartClicked, setCartClicked] = useState(false);

  const toggleCart = ()=>{
      setCartClicked(!isCartClicked)
  }

  useEffect(()=>{
    getCartData(getUid())
  },[])

  return (
    <div style={{cursor:"pointer"}} id="cart-main">
      <div className="button shop-cart" onClick={toggleCart}>
        {productCounter ? (
          <div  style={{fontSize: 40}}>
            {productCounter}
          </div>
          ) : 
          (
          <img src="https://img.icons8.com/pastel-glyph/40/000000/shopping-cart--v1.png" alt="cart" />
        )}
      </div>
      {isCartClicked ? (
        <div className="box animated fadeIn fast" id="cart">
              <ul className="sub-heading">
                <li id="item-head">Items</li>
                <li id="price-head">Price</li>
              </ul>
            <div className="products">
              <ul>
                {cartItems.map((productAdded, i) => {
                  return(
                    <li id="product-added" key={i} data-id={productAdded.id} onClick={deleteCartItem}>{productAdded.productName.slice(0,20)}...</li>
                  )
                })}
                Total: 
              </ul>
              <ul>
                {cartItems.map((price, i)=>{
                  return(
                    <Fragment>
                      <li key={i} id="product-price-cart" data-id={price.id}> &#8377;{price.pricePerItem}</li>
                    </Fragment>
                  )
                })}
                <li>
                  <strong>
                    &#8377;{total}
                  </strong>
                </li>
              </ul>
            </div>
            <div>
            {productCounter ? (
              <Link to={`/checkout/${getUid()}`}>
                <button id="checkout" onClick={()=>{setOrderClicked(true); toggleCart()}}>Order</button>
              </Link>
            ): null}
            </div>
          </div>
      ): null}
    </div>
  );
}
 
export default ShoppingCart;