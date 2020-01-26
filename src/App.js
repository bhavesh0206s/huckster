import React from 'react';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navabar';
import Home from './components/home/Home';
import About from './components/about/About';
import Notfound from './Notfound'
import ProductList from './components/product/ProductList';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signIn/SignIn';
import SellHere from './components/sell-here/SellHere';

const App = (props)=>{
  return(
    <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component = {Home}>{props.children}</Route>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/products" component={ProductList}/>
          <Route path="/about" component={About}/>
          <Route path="/sell" component={SellHere}/>
          <Route component={Notfound} />
        </Switch>
    </Router>
  )
}

export default App;

