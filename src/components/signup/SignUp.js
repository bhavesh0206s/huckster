import React from 'react';
import './signup.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SigninContext } from '../../context/SigninContext';

const Signup = (props) => {
  
  const {handleSignup, passwordError, setEmail, setPassword} = useContext(SigninContext);

  return (
    <div className="layer-signin">
      <div className="box animated bounceInDown" id="signup-box">  
      <h1><strong>SignUp</strong></h1>
      <div className="gmail-signup">
        <button className="button is-danger">Signup with Gmail</button>
      </div>
      <form onSubmit={handleSignup}>
        <label>Email</label>
          <input className="input is-rounded" type="email" placeholder="Enter your email" onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
          <input id="submit" className="input is-rounded" type="password" placeholder="Enter password" onChange={e=>setPassword(e.target.value)}/>
          <h4 style={{color:"red"}}>{passwordError}</h4>
        <button className="button is-primary is-rounded">Submit</button>
        <Link to="/signin">
          <button id="signin" className="button is-rounded">Login</button>  
        </Link>
      </form>
      </div>
    </div>
  );
}
 
export default Signup;