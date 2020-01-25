import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navabar';
import Home from './components/home/Home';
import Notfound from './Notfound'
import ProductList from './components/product/ProductList';
import Footer from './components/footer/Footer';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signIn/SignIn';
import firebase from './firebase'

const App = ()=>{
  return(
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="*"render={()=>(
            <Fragment>
              <Home/>
              <ProductList/>
              <Footer/>
            </Fragment>
          )}></Route>
          <Route exact path="/" Component={Home}/>
          <Route path="/products" Component={ProductList}/>
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;

