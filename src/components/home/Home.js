import React from 'react';
import {Link} from 'react-router-dom'
import './home.css'
import Footer from '../footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
  const {getUsername, currentUser} = useContext(AuthContext);

  return (
    <div className="home">
      <div className="layer">
        {currentUser ? <h1 style={{color:"antiquewhite"}} id="username" className="animated fadeInLeft">Welcome {getUsername()}</h1> : null}
        <h1 id="title" className="animated fadeInRight">huckster</h1>
        <p id="buy-online" className="animated fadeInLeft">Buy & Sell Anything</p>
        <Link to='./products'>
          <button className="button animated rubberBand" id='shop-now'>SHOP NOW</button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}
 
export default Home;