import React, { useContext } from 'react';
import './payment.css'
import { useState } from 'react';
import { ProductContext } from '../../context/ProductContext';

const Payment = () => {
  const [isClicked , setIsClicked] = useState(false);
  const {paymentSelected,setPaymentSelected} = useContext(ProductContext)
  

  const addAnimation = (e) =>{
    const element = e.currentTarget;
    element.classList.add('clicked');
    setIsClicked(!isClicked);
    setPaymentSelected(e.currentTarget.dataset.id);
  }

  const removeAnimation = (e) =>{
    const element = e.currentTarget;
    element.classList.remove('clicked');
    setIsClicked(!isClicked)
  }

  return (
    <div id="payment" style={{marginTop: "2em"}}>
      <h1 id="payment-text">Select Payment Option</h1>
      <div id="underline"></div>
      <div className="option" data-id="cod" onClick={(e) => {!isClicked ? addAnimation(e) : removeAnimation(e)}}>
        COD
      </div>
      <div className="option" data-id="card" onClick={(e) => {!isClicked ? addAnimation(e) : removeAnimation(e)}}>
        DEBIT/CREDIT CARD
      </div>
      <div className="option" data-id="online" onClick={(e) => {!isClicked ? addAnimation(e) : removeAnimation(e)}}>
        ONLINE BANKING
      </div>
      <div className="option" data-id="free" onClick={(e) => {!isClicked ? addAnimation(e) : removeAnimation(e)}}>
        FREE
      </div>
    </div>
  );
}
 
export default Payment;