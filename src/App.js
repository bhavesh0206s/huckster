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
import AuthContextProvider from './context/AuthContext';
import SiginContextProvider from './context/SigninContext';
import SignupContextProvider from './context/SignupContext';

const App = (props)=>{
  return(
    <AuthContextProvider>
    <SiginContextProvider>
    <SignupContextProvider>
      <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/products" component={ProductList}/>
            <Route path="/about" component={About}/>
            <Route path="/sell" component={SellHere}/>
            <Route component={Notfound} />
          </Switch>
      </Router>
    </SignupContextProvider>
    </SiginContextProvider>
    </AuthContextProvider>
  )
}

export default App;

