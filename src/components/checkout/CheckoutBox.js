import React from 'react';
import './checkout.css';

const CheckoutBox = (props) => {
  return (
    <div className="box checkout-box-main">
        <article className="media">
          <div className="media-left">
            <figure className="image is-100x100">
              <img src={props.imageUrl} alt="Image"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.productName}</strong>
                <br/>
                {props.productDetails}
              </p>
            </div>
          </div>
      </article>
    </div>
  );
}
 
export default CheckoutBox;