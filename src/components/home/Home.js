import React from 'react';
import {Link} from 'react-router-dom'
import './home.css'
import Footer from '../footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../loading/Loading';


const Home = () => {
  const {getUsername, currentUser} = useContext(AuthContext);

  return (
    <div className="home">
      <div className="layer">
        {currentUser ? <h1 id="username" className="animated fadeInLeft">Welcome {getUsername()}</h1> : null}
        <h1 id="title" className="animated fadeInRight">Artisanship</h1>
        <p id="buy-online" className="animated fadeInLeft">Buy & Sell Handicraft Online</p>
        <Link to='./products'>
          <button className="button animated rubberBand" id='shop-now'>SHOP NOW</button>
        </Link>
      <Loading/>
      </div>
      <Footer/>
    </div>
  );
}
 
export default Home;