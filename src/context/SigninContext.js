import React, { createContext, useState } from 'react';
import fire from '../firebase';

export const SigninContext = createContext()

const SiginContextProvider = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false)
  
  const handleSignin = async (event) =>{
    event.preventDefault();
    try{
      await fire.auth().signInWithEmailAndPassword(email, password);
      setEmail('')
      setPassword('')
      setRedirect(true)
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <SigninContext.Provider value={{email, password, handleSignin, setPassword, setEmail}}>
      {props.children}
    </SigninContext.Provider>
  );
}
 
export default SiginContextProvider;