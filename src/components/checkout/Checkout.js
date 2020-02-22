import React , {useContext, useEffect} from 'react';
import { ProductContext } from '../../context/ProductContext';
import { AuthContext } from '../../context/AuthContext';
import CheckoutBox from './CheckoutBox';
import Payment from '../payment/Payment';
import './checkout.css';
import { Link } from 'react-router-dom';

const Checkout = (props) => {
  const {getUid} = useContext(AuthContext)
  const {total,paymentSelected,productCounter, getCartData, buyNowData, isOrderClicked,getBuyNowData, cartItems,deleteBuyNowItem,deleteCartItem} = useContext(ProductContext);

  useEffect(()=>{
    let uid = getUid()
    getBuyNowData(uid)
    getCartData(uid)
  },[])

  return (
    <div className="checkout-box">
      {productCounter>0 || isOrderClicked  ? (
        cartItems.map((item ,i)=>
          item?(
            <CheckoutBox
              key = {i}
              productName = {item.productName}
              imageUrl = {item.imageUrl}
              pricePerItem = {item.pricePerItem}
              id = {item.id}
              delete = {deleteCartItem}
            />
          ):null
        )
      ): (
        buyNowData.map((item ,i) =>
          item?(
            <CheckoutBox
              key = {i}
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
        {paymentSelected.length !== 0 && (cartItems.length !==0 || buyNowData.length!==0)? (
          <Link to={`/free/${getUid()}`}>
            <button className="button is-danger" id="checkout-red" style={{background:'rgb(243, 53, 53)'}}>Submit</button>
          </Link>
        ) : (
          <button className="button is-danger" id="checkout-red" style={{background:'rgb(243, 53, 53)'}}>Submit</button>
        )}
      </div>
    </div>
  );
}
 
export default Checkout;