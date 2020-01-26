import React from 'react';
import {Link} from 'react-router-dom'
import './home.css'
import SignIn from '../signIn/SignIn';
import SignUp from '../signup/SignUp';
import { useState } from 'react';
import Footer from '../footer/Footer';


const Home = () => {
  return (
    <div className="home">
      <div className="layer">
        <h1 id="title" className="animated fadeInRight">Artisanship</h1>
        <p id="buy-online" className="animated fadeInLeft">Buy & Sell Handicraft Online</p>
        <Link to='./products'>
          <button className="button animated rubberBand" id='shop-now'>SHOP NOW</button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}
 
export default Home;