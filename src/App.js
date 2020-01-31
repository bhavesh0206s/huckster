import React from 'react';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navabar';
import Home from './components/home/Home';
import About from './components/about/About';
import Notfound from './Notfound'
import ProductList from './components/product/ProductList';
import Signup from './components/signup/Signup';
import Signin from './components/signIn/Signin';
import SellHere from './components/sell-here/SellHere';
import PrivateRoute from './components/PrivateRoute';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import { AuthContext } from './context/AuthContext';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './App.css'

const App = (props)=>{
  const {currentUser, getUid, firebaseIsInitialized} = useContext(AuthContext);
  // const sessionUser = Cookies.get('user')

  return(
    <Router>
        <Navbar/>
        {currentUser ? (
          <div id="home-shop-cart">
              <ShoppingCart/>
          </div>
        ): null}
        <Switch>
          <Route path={!(currentUser) ? '/' : `/${getUid()}`} exact component = {Home}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/products" component={ProductList}/>
          <Route path="/about" component={About}/>
          <PrivateRoute path={`/sell/${getUid()}`} component={SellHere}/>
          <Route component={Notfound} />
        </Switch>
    </Router>
  )
}

export default App;

