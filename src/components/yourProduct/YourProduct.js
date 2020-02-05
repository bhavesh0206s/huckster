import React from 'react';
import { useState } from 'react';
import YourProductDetails from './YourProductDetail';

const YourProduct = (props) => {

  const [isDetail , setIsDetail] = useState(false)

  const toggleDetail = () => {
    setIsDetail(!isDetail)
    console.log(props.yourProductInfo)
  } 
  
  return (
    <div >
      <div style={{margin: "100"}}>
        {isDetail ? (
          <YourProductDetails price={props.pricePerItem} imageUrl={props.imageUrl} productName={props.productName} productDetails={props.productDetails}  toggleDetail={toggleDetail}/>
        ) : null}
      </div>
      <div className="card">
        <div className="card-content">
          <p className="title">
            <img src={props.imageUrl} alt={props.productName} width="300" height="200"/>
          </p>
        </div>
        <div style={{display:"flex" ,justifyContent:"space-around"}}> 
            <div className="subtitle product-name">
              {props.productName}
            </div>
            <div className="subtitle">
              <strong>
                &#8377;
                {props.pricePerItem}
              </strong>
            </div>
          </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <button onClick={toggleDetail} className="button is-primary is-inverted is-outlined buy-now" style={{backgroundColor:"#758184", color:'antiquewhite'}}>
              Details
            </button>
          </p>
          <p className="card-footer-item">
            <button value={props.id} onClick={props.deleteItem} className="button is-primary add-to-cart delete-btn" style={{backgroundColor:"#5d5b6a", color:'antiquewhite'}}>
              Delete
            </button>
          </p>
        </footer>
      </div>
    </div>
  );
}
 
export default YourProduct;