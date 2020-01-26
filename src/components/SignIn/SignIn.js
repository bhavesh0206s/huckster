import React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import './signin.css';
import fire from '../../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try{
      await fire.auth().signInWithEmailAndPassword(email, password)
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <div className="layer-signin">
      <div className="box animated bounceInDown">
      <h1><strong>Login</strong></h1>
      <div className="gmail-signin">
        <button className="button is-danger">Login with Gmail</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Email</label> 
          <input className="input is-rounded" type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
          <input className="input is-rounded" type="password" placeholder="Enter password" onChange={e=>setPassword(e.target.value)}/>
        <button className="button is-primary is-rounded">Submit</button>
        <Link to="/signup">
          <button id="signup" className="button is-rounded">SignUp</button>  
        </Link>
      </form>
      </div>
    </div>
  );
}
 
export default SignIn;