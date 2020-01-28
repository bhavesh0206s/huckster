import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'
import './product-list.css'

const ProductList = (props) => {

  const {currentUser} = useContext(AuthContext)

  const handleAddtoCart = () => {
    if(!currentUser){
      props.history.push('/signin')
    }
    else{
      alert('Thank You')
    }
  }

  const handleBuyNow = () => {
    if(!currentUser){
      props.history.push('/signin')
    }
    else{
      alert('Thank You')
    }
  }

  return (
    <div className="grid" >
      <div className="columns">
        <div className="column animated pulse">
          <div className="card">
            <div className="card-content">
              <p className="title">
                <img src="https://n2.sdlcdn.com/imgs/h/d/o/Laying-Style-Multicolour-Ceramic-Handicraft-SDL523167947-1-07f5b.jpg" alt=""/>
              </p>
              <p className="subtitle">
                Ceramic Handicraft Showpiece
              </p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <button onClick={handleBuyNow} className="button is-primary is-inverted is-outlined" style={{backgroundColor:"#758184", color:'antiquewhite'}}>
                  Buy Now
                </button>
              </p>
              <p className="card-footer-item">
                <button onClick={handleAddtoCart} className="button is-primary " style={{backgroundColor:"#5d5b6a", color:'antiquewhite'}}>
                  Add to Cart
                </button>
              </p>
            </footer>
          </div>
        </div>
        
      </div> 
    </div>
  );
}
 
export default ProductList;