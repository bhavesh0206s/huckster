import React from 'react';
import './model.css'

const YourProductDetails = (props) => {

  return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{props.productName}</p>
            <button onClick={props.toggleDetail} className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <img src={props.imageUrl} alt=""/>
            <h5>
              {props.productDetails}
            </h5>
            <h1>
              <strong>
                &#8377;
                {props.price}
              </strong>
            </h1>
          </section>
          <footer className="modal-card-foot">
            <button onClick={props.toggleDetail} className="button is-success">Close</button>
          </footer>
        </div>
      </div>
  );
}
 
export default YourProductDetails;