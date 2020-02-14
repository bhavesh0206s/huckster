import React, {useState, Fragment} from 'react';
import './shoppingcart.css'
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = (props) => {
  const [isCartClicked, setCartClicked] = useState(false);
  const {productNameForCart, priceOfItem,deleteItem, setOrderClicked} = useContext(ProductContext);
  const [total, setTotal] = useState(0);
  const [counter, setCounter] = useState(0);

  const toggleCart = ()=>{
      setCartClicked(!isCartClicked)
      console.log(productNameForCart);
      console.log(priceOfItem)
  }

  useEffect(()=>{
    let sum  = 0;
    let count = 0;
    priceOfItem.forEach(element => {
      sum += Number(element)
      count++
    })
    setTotal(sum)
    setCounter(count)
  },[priceOfItem])

  return (
    <div style={{cursor:"pointer"}} id="cart-main">
      <div className="button shop-cart" onClick={toggleCart}>
        {counter ? (
          <div style={{fontSize: 40}}>
            {counter}
          </div>
          ) : 
          (
          <img src="https://img.icons8.com/pastel-glyph/40/000000/shopping-cart--v1.png" alt="cart" />
        )}
      </div>
      {isCartClicked ? (
        <div className="box animated fadeIn" id="cart">
              <ul className="sub-heading">
                <li id="item-head">Items</li>
                <li id="price-head">Price</li>
              </ul>
            <div className="products">
              <ul>
                {productNameForCart.map((productAdded, index) => {
                  return(
                    <li id="product-added" value={index} onClick={deleteItem}>{productAdded.slice(0,20)}...</li>
                  )
                })}
                Total: 
              </ul>
              <ul>
                {priceOfItem.map((price,index)=>{
                  return(
                    <Fragment>
                      <li id="product-price-cart" value={index}> &#8377;{price}</li>
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
            <Link to="/checkout">
              <button id="checkout" onClick={()=>setOrderClicked(true)}>Order</button>
            </Link>
            </div>
          </div>
      ): null}
    </div>
  );
}
 
export default ShoppingCart;