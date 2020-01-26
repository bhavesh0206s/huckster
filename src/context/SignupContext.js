import React, { createContext, useState, useCallback } from 'react';
import fire from '../firebase';

export const SignupContext = createContext()

const SignupContextProvider = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const  handleSignup = useCallback( async event =>{
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
      setPasswordError(e.message)
    }
  },[email,password,props.history])

  return (
    <SignupContext.Provider value={{email, password, handleSignup, passwordError, setEmail, setPassword}}>
      {props.children}
    </SignupContext.Provider>
  );
}
 
export default SignupContextProvider;