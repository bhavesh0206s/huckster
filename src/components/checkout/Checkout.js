import React from 'react';
import CheckoutBox from './CheckoutBox';
import './checkout.css';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const Checkout = () => {
  const {buyNowData} = useContext(ProductContext);
  console.log(buyNowData)
  return (
    <div className="checkout-box">
      {buyNowData.map(item =>
        <CheckoutBox
          productName = {item.productName}
          productDetails = {item.productDetails}
          imageUrl = {item.imageUrl}
          pricePerItem = {item.pricePerItem}
        />
      )}
    </div>
  );
}
 
export default Checkout;