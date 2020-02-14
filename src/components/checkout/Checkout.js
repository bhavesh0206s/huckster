import React from 'react';
import CheckoutBox from './CheckoutBox';
import './checkout.css';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import styled from 'styled-components';
import Payment from '../payment/Payment';
import { useState } from 'react';
import { useEffect } from 'react';



const Checkout = () => {
  const {productNameForCart, priceOfItem, buyNowData, isOrderClicked, imageUrlCheckout} = useContext(ProductContext);
  const [cartItems, setCartItems] = useState([])

  const addtoSetCartItems = () => {
    let product = productNameForCart.map((item,i)=>{
      return {name: item, price: priceOfItem[i], imageUrl: imageUrlCheckout[i]}
    })
    setCartItems(product)
  }

  useEffect(()=>{
    addtoSetCartItems()
  },[])

  return (
    <div className="checkout-box">
      {isOrderClicked ? (
        cartItems.map(item=>
          <CheckoutBox
            productName = {item.name}
            imageUrl = {item.imageUrl}
            pricePerItem = {item.price}
          />
        )
      ): (
        buyNowData.map(item =>
          <CheckoutBox
            productName = {item.productName}
            productDetails = {item.productDetails}
            imageUrl = {item.imageUrl}
            pricePerItem = {item.pricePerItem}
          />
        )
      )}
      <div>
        <Payment/>
      </div>
      <div style={{paddingBottom:"1em"}}>
        <button class="button is-danger" id="checkout-red" style={{background:'rgb(243, 53, 53)'}}>Submit</button>
      </div>
    </div>
  );
}
 
export default Checkout;