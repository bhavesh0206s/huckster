import React from 'react';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import './home.css'
import SignIn from '../signIn/SignIn';
import SignUp from '../signup/SignUp';
import { useState } from 'react';
import ProductList from '../product/ProductList';
import Footer from '../footer/Footer';

const Home = () => {

  return (
    <div className="home">
      <div className="signin signup">       
        {/* <Route path="/signin" Component={SignIn}/>
        <Route path="/signup" Component={SignUp}/> */}
      </div>
      <div className="layer">
        <h1 id="title">Artisanship</h1>
        <p id="buy-online">Buy handicraft online</p>
      </div>
    </div>
  );
}
 
export default Home;