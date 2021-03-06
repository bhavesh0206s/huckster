import React, { useState, useContext  } from 'react';
import {Link, Redirect} from 'react-router-dom';

import './signin.css';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../loading/Loading';


const Signin = (props) => {
  const {signin, redirect, getUid, isLoading} = useContext(AuthContext);
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    signin(email, password);
  }
  if(redirect){
    return <Redirect to={`/${getUid()}`} />
  }
  else{
    return (
      <div>
        {isLoading ? (
          <Loading/>
        ): (
        <div className="layer-signin">
          <div className="box animated bounceInDown">
          <h1 style={{marginBottom:30, fontSize: '1.5em'}}><strong>Login</strong></h1>
          <form onSubmit={handleSubmit}>
            <label>Email</label> 
              <input className="input is-rounded" required type="email" placeholder="Enter email" onChange={e => getEmail(e.target.value)} />
            <label>Password</label>
              <input className="input is-rounded" required type="password" placeholder="Enter password" onChange={e => getPassword(e.target.value)} />
            <button className="button is-primary is-rounded">Submit</button>
            <Link to="/signup">
              <button id="signup" className="button is-rounded">SignUp</button>  
            </Link>
          </form>
          </div>
        </div>
        )}
      </div>
    );
  }
}
 
export default Signin;