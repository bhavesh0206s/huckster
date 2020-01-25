import React from 'react';
import './navbar.css'
import { useEffect } from 'react';

const styles = {
  textTransform: "uppercase" 
}

const Navbar = () => {

  return (
    <nav className="navbar main" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <img id="icon" src="https://img.icons8.com/color/50/000000/potters-wheel.png" alt="artisanship"/>
          <strong id="company-name" style={{color: "antiquewhite"}}>Artisanship</strong>
        </div>

        <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item" style={{color: "antiquewhite"}}>
            Home
          </div>
          <div className="navbar-item" style={{color: "antiquewhite"}}>
            Sell Here
          </div>
          <div className="navbar-item" style={{color: "antiquewhite"}}>
            Your Orders
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link" style={{color: "antiquewhite"}}>
              More
            </div>

            <div className="navbar-dropdown">
              <div className="navbar-item">
                About
              </div>
              <div className="navbar-item">
                Contact
              </div>
              <hr className="navbar-divider"/>
              <div className="navbar-item">
                Report an issue
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="button is-primary">
                <strong>Sign up</strong>
              </div>
              <div className="button is-light">
                Log in
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;