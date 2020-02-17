import React from 'react';
import './checkout.css';

const CheckoutBox = (props) => {
  return (
    <div className="box checkout-box-main">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.imageUrl} alt={props.productName}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
          <a class="delete is-large" data-id={props.id} onClick={props.delete} style={{float:"right"}} />
              <p id="name-checkout">
                <strong>{props.productName}</strong>
                <br/>
              </p>
              <div id="price-checkout">
                &#8377;
                {props.pricePerItem}
              </div>
            </div>
          </div>
      </article>
    </div>
  );
}
 
export default CheckoutBox;