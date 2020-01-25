import React from 'react';
import './signup.css'
const SignUp = () => {
  return (
    <div className="layer-signin">
      <div className="box" id="signup-box">  
      <div className="gmail-signup">
        <button className="button is-danger">Signup with Gmail</button>
      </div>
      <form>
        <label>Name</label>
          <input className="input is-rounded" type="text" placeholder="Enter your name"/>
        <label>Mobile Number</label>
          <input className="input is-rounded" type="text" placeholder="Enter your mobile number"/>
        <label>Email</label>
          <input className="input is-rounded" type="text" placeholder="Enter your email"/>
        <label>Password</label>
          <input id="submit" className="input is-rounded" type="text" placeholder="Enter password"/>
        <button className="button is-primary is-rounded">Submit</button>
        <button id="signin" className="button is-rounded">SignIn</button>  
      </form>
      </div>
    </div>
  );
}
 
export default SignUp;