import React from 'react';
import {Route} from 'react-router-dom'
import './home.css'
import SignIn from '../signIn/SignIn';
import SignUp from '../signup/SignUp';
import { useState } from 'react';
import Footer from '../footer/Footer';


const Home = () => {
  return (
    <div className="home">
      <div className="layer">
        <h1 id="title">Artisanship</h1>
        <p id="buy-online">Buy handicraft online</p>
      </div>
      <Footer/>
    </div>
  );
}
 
export default Home;