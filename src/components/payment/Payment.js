import React, { useContext } from 'react';
import './payment.css'
import { useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useEffect } from 'react';

const Payment = () => {
  const [isClicked , setIsClicked] = useState(false);
  const {paymentSelected,setPaymentSelected} = useContext(ProductContext)
  
  const handleSelected = (e) =>{
    setPaymentSelected(e.target.value)
  }

  useEffect(()=>{
    setPaymentSelected('')
  },[])

  return (
    <form>
      
      <div id="payment" style={{marginTop: "2em"}}>
        <h1 id="payment-text">Select Payment Option</h1>
        <div className="option" data-id="cod">
          <input type="radio" id="radio-btn1" name="payment" className="" onClick={handleSelected} value='cod'/>
          <label htmlFor="radio-btn1" style={{paddingLeft: 10}}>
            COD
          </label>
        </div>
        <div className="option" data-id="card">
          <input type="radio" id="radio-btn2" name="payment" value='card' onClick={handleSelected}/>
          <label htmlFor="radio-btn2" style={{paddingLeft: 10}}>
            DEBIT/CREDIT CARD
          </label>
        </div>
        <div className="option" data-id="online">
          <input type="radio" id="radio-btn3" name="payment" value='radio' onClick={handleSelected}/>
          <label htmlFor="radio-btn3" style={{paddingLeft: 10}}>
            ONLINE BANKING
          </label>
        </div>
        <div className="option" data-id="free">
          <input type="radio" id="radio-btn4" name="payment" value='free' onClick={handleSelected}/>
          <label htmlFor="radio-btn4" style={{paddingLeft: 10}}>
            FREE
          </label>
        </div>
      </div>
    </form>
  );
}
 
export default Payment;