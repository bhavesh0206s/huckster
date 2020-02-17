import React, { useState, useContext } from 'react';
import './product.css'
import YourProductDetails from '../yourProduct/YourProductDetail';
import { AuthContext } from '../../context/AuthContext';
import { ProductContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
  const {currentUser,getUid} = useContext(AuthContext);
  const {addtoCartClicked ,buyNowClicked,getCartData} = useContext(ProductContext);
  const [isDetail , setIsDetail] = useState(false)

  const toggleDetail = () => {
    let htmlMainElement = document.querySelector('html')
    htmlMainElement.classList.toggle('is-clipped')
    setIsDetail(!isDetail)
  }
  
  const animaterCartCounter = () =>{
    const animate = document.querySelector('.shop-cart')
    animate.classList.add('animated bounceInUp')
  }

  return (
    <div>
    <div style={{margin: "100"}}>
        {isDetail ? (
          <YourProductDetails price={props.pricePerItem} imageUrl={props.imageUrl} productName={props.productName} productDetails={props.productDetails}  toggleDetail={toggleDetail}/>
        ) : null}
      </div>
    <div className="card" >
        <div className="card-content" >
        <figure className="image is-4by3" onClick={toggleDetail} style={{cursor: "pointer"}}>
            <img id="product-img" src={props.imageUrl} alt={props.productName} />
        </figure>
        </div>
        <div style={{display:"flex" ,justifyContent:"space-around"}}> 
          <div className="subtitle product-name" onClick={toggleDetail}>
            {props.productName.slice(0,25)}...
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
            <Link to={`/checkout/${getUid()}`}>
              <button onClick={()=> currentUser ?
                    buyNowClicked(props.productName, props.pricePerItem, props.imageUrl) : props.gotoSignIn}  
                    className="button is-primary is-inverted is-outlined buy-now" 
                    style={{backgroundColor:"#758184", color:'antiquewhite'}}>
                Buy Now
              </button>
            </Link>
          </p>
          <p className="card-footer-item">
            <button onClick={currentUser ? async ()=> {await addtoCartClicked(props.productName,props.pricePerItem,props.imageUrl); await getCartData(getUid());animaterCartCounter()}: props.gotoSignIn} className="button is-primary add-to-cart" style={{backgroundColor:"#5d5b6a", color:'antiquewhite'}}>
              Add to Cart
            </button>
          </p>
        </footer>
      </div>
    </div>
  );
}
 
export default ProductList;
