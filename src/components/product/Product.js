import React, { useState, useContext } from 'react';
import './product.css'
import YourProductDetails from '../yourProduct/YourProductDetail';
import { AuthContext } from '../../context/AuthContext';
import { ProductContext } from '../../context/ProductContext';

const ProductList = (props) => {
  const {currentUser} = useContext(AuthContext);
  const {productNameForCart, setProductNameForCart,priceOfItem, setPriceOfItem} = useContext(ProductContext);
  const [isDetail , setIsDetail] = useState(false)

  const toggleDetail = () => {
    setIsDetail(!isDetail)
  } 


  const handleAddtoCart = () => {
    setProductNameForCart([...productNameForCart, props.productName]);
    setPriceOfItem([...priceOfItem, props.pricePerItem])
  }

  const handleBuyNow = () => {
    alert('Thank You')
  }

  return (
    <div>
    <div style={{margin: "100"}}>
        {isDetail ? (
          <YourProductDetails price={props.pricePerItem} imageUrl={props.imageUrl} productName={props.productName} productDetails={props.productDetails}  toggleDetail={toggleDetail}/>
        ) : null}
      </div>
    <div className="card">
        <div className="card-content" >
        <figure class="image is-4by3">
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
            <button onClick={currentUser ? handleBuyNow : props.gotoSignIn} className="button is-primary is-inverted is-outlined buy-now" style={{backgroundColor:"#758184", color:'antiquewhite'}}>
              Buy Now
            </button>
          </p>
          <p className="card-footer-item">
            <button onClick={currentUser ? handleAddtoCart: props.gotoSignIn} className="button is-primary add-to-cart" style={{backgroundColor:"#5d5b6a", color:'antiquewhite'}}>
              Add to Cart
            </button>
          </p>
        </footer>
      </div>
    </div>
  );
}
 
export default ProductList;