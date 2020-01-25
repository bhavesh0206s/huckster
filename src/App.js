import React from 'react';
import Navbar from './components/navbar/Navabar';
import Home from './components/home/Home';
import ProductList from './components/product/ProductList';
import Footer from './components/footer/Footer';
import SignIn from './components/SignIn/SignIn';

const App = ()=>{
  return(
    <div>
      <SignIn/>
      <Navbar/>
      <Home/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default App;

