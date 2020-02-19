import React , {useContext,useState,useEffect} from 'react';
import { ProductContext } from '../../context/ProductContext';
import { AuthContext } from '../../context/AuthContext';
import CheckoutBox from './CheckoutBox';
import Payment from '../payment/Payment';
import './checkout.css';
import { Redirect } from 'react-router-dom';
import { useCallback } from 'react';



const Checkout = (props) => {
  const {getUid} = useContext(AuthContext)
  const {total,productCounter, getCartData, buyNowData, isOrderClicked,getBuyNowData, cartItems,deleteBuyNowItem,deleteCartItem} = useContext(ProductContext);


  useEffect(()=>{
    let uid = getUid()
    getBuyNowData(uid)
    getCartData(uid)
    if(total === 0){
      props.history.push('/')
    }
  },[])

  return (
    <div className="checkout-box">
      {productCounter>0 || isOrderClicked  ? (
        cartItems.map(item=>
          item?(
            <CheckoutBox
              productName = {item.productName}
              imageUrl = {item.imageUrl}
              pricePerItem = {item.pricePerItem}
              id = {item.id}
              delete = {deleteCartItem}
            />
          ):null
        )
      ): (
        buyNowData.map(item =>
          item?(
            <CheckoutBox
              productName = {item.productName}
              imageUrl = {item.imageUrl}
              pricePerItem = {item.pricePerItem}
              id = {item.id}
              delete = {deleteBuyNowItem}
            />
          ):null
        )
      )}
      <div>
         {productCounter>0? 
          (
           <h1 id="total-checkout">total: <span>&#8377;{total}</span></h1>
          ) : null} 
      </div>
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