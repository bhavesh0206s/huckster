import React from 'react';
import './navbar.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useState } from 'react';



const Navbar = () => {
  const [isCartClicked, setCartClicked] = useState(false)

  return (
    <nav className="navbar main" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/" >  
            <img id="icon" src="https://img.icons8.com/color/50/000000/potters-wheel.png" alt="artisanship"/>
            <strong id="company-name" style={{color: "antiquewhite"}}>Artisanship</strong>
          </Link>
        </div>

        <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/sell" style={{color: "black", cursor:"pointer"}}>
              Sell Here
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/products" style={{color: "black", cursor:"pointer"}}>
              Products
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/your-order" style={{color: "black", cursor:"pointer"}}>
              Your Products
            </Link>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link" style={{color: "black", cursor:"pointer"}}>
              More
            </div>

            <div className="navbar-dropdown">
              <div className="navbar-item" style={{color: "black", cursor:"pointer"}}>
                <Link to="/about">
                  About
                </Link>
              </div>
              <hr className="navbar-divider"/>
              <div className="navbar-item" style={{color: "black", cursor:"pointer"}}>
                <Link to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        {isCartClicked?<ShoppingCart/>:null}
        <div className="navbar-end">
          <div className="navbar-item">
            <div onClick style={{marginRight:"30", cursor:"pointer"}} onClick={e=>isCartClicked?setCartClicked(false):setCartClicked(true)}> 
              <img  src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png" />
            </div>
            <div className="buttons">
              <Link to="signup">
                <div className="button is-primary">
                  <strong>Sign up</strong>
                </div>
              </Link>
              <Link to="signin">
                <div className="button is-light">
                  Log in
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;