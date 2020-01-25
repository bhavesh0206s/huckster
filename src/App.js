import React from 'react';
import Navbar from './components/navbar/Navabar';
import Home from './components/home/Home';
import ProductList from './components/product/ProductList';
import Footer from './components/footer/Footer';


const App = ()=>{
  return(
    <div>
      <Navbar/>
      <Home/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default App;

