import React from 'react';
import './signin.css'
const SignIn = () => {
  return (
    <div className="box">
      <div className="gmail-signin">
        <button className="button is-danger">Signin with Gmail</button>
      </div>
      <form>
        <label>Email</label>
          <input className="input is-rounded" type="text" placeholder="Enter email"/>
        <label>Password</label>
          <input className="input is-rounded" type="text" placeholder="Enter password"/>
        <button className="button is-primary is-rounded">Submit</button>
        <button className="button is-rounded">SignUp</button>  
      </form>
    </div>
  );
}
 
export default SignIn;