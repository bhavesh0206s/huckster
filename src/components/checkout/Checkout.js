import React , {useContext,useState,useEffect} from 'react';
import { ProductContext } from '../../context/ProductContext';
import { AuthContext } from '../../context/AuthContext';
import CheckoutBox from './CheckoutBox';
import Payment from '../payment/Payment';
import './checkout.css';



const Checkout = () => {
  const {getUid} = useContext(AuthContext)
  const {getCartData, buyNowData, isOrderClicked,getBuyNowData, cartItems,deleteBuyNowItem,deleteCartItem} = useContext(ProductContext);

  useEffect(()=>{
    let uid = getUid()
    getBuyNowData(uid)
    getCartData(uid)
  },[])

  return (
    <div className="checkout-box">
      {isOrderClicked ? (
        cartItems.map(item=>
          item?(
            <CheckoutBox
              productName = {item.productName}
              imageUrl = {item.imageUrl}
              pricePerItem = {item.pricePerItem}
              id = {item.id}
              delete = {deleteCartItem}
            />
          ):( <h1>No Item</h1> )
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
          ):(<h1>No Item</h1> )
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