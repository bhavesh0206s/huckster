import React from 'react';
import './payment.css'

const Payment = () => {
  const addAnimation = (e) =>{
    const element = e.currentTarget
    element.classList.toggle('clicked')
  }

  return (
    <div id="payment" style={{marginTop: "2em"}}>
      <h1 id="payment-text">Select Payment Option</h1>
      <div className="option" onClick={addAnimation}>
        COD
      </div>
      <div className="option" onClick={addAnimation}>
        DEBIT/CREDIT CARD
      </div>
      <div className="option" onClick={addAnimation}>
        ONLINE BANKING
      </div>
      <div className="option" onClick={addAnimation}>
        FREE
      </div>
    </div>
  );
}
 
export default Payment;