import React from 'react';

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
          <h3>
            {props.productDetails}
          </h3>
        </section>
        <footer className="modal-card-foot">
          <button onClick={props.toggleDetail} className="button is-success">Close</button>
        </footer>
      </div>
    </div>
  );
}
 
export default YourProductDetails;