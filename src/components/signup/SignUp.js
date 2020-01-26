import React, {useCallback} from 'react';
import './signup.css'
import fire from '../../firebase';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback( async event =>{
    event.preventDefault();
    try{
      console.log(typeof email,password)
      await fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
      props.history.push('/')
      setEmail('')
      setPassword('')
    }
    catch(e){
      console.log('error ',e)
    }
  },[email,password,props.history])

  return (
    <div className="layer-signin">
      <div className="box animated bounceInDown" id="signup-box">  
      <h1><strong>SignUp</strong></h1>
      <div className="gmail-signup">
        <button className="button is-danger">Signup with Gmail</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
          <input className="input is-rounded" type="email" placeholder="Enter your email" onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
          <input id="submit" className="input is-rounded" type="password" placeholder="Enter password" onChange={e=>setPassword(e.target.value)}/>
        <button className="button is-primary is-rounded">Submit</button>
        <Link to="/signin">
          <button id="signin" className="button is-rounded">Login</button>  
        </Link>
      </form>
      </div>
    </div>
  );
}
 
export default SignUp;