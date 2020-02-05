import React, { useState, useContext  } from 'react';
import './signup.css'
import { Link , Redirect} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../loading/Loading';


const Signup = (props) => {
  const {signup, redirect, getUid, isLoading} = useContext(AuthContext);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    signup(email, password, fullname)
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
          <div className="box animated bounceInDown" id="signup-box">  
          <h1><strong>SignUp</strong></h1>
          <div className="gmail-signup">
            <button className="button is-danger">Signup with Gmail</button>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
              <input className="input is-rounded" type="text" placeholder="Enter your fullname" onChange={e => setFullname(e.target.value)} />
            <label>Email</label>
              <input className="input is-rounded" type="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
            <label>Password</label>
              <input id="submit" className="input is-rounded" type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
            <button className="button is-primary is-rounded">Submit</button>
            <Link to="/signin">
              <button id="signin" className="button is-rounded">Login</button>  
            </Link>
          </form>
          </div>
        </div>
        )}
      </div>
    );
  }
}
 
export default Signup;