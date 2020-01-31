import React, { createContext } from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie'
import { useEffect } from 'react';
import fire from '../firebase'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [redirect, setRedirect] = useState(false)
  useEffect(()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        setCurrentUser(user)
        setRedirect(true)
      }
      else{
        setCurrentUser(null)
        setRedirect(false)
      }
    })
  },[currentUser])

  const signin = async (email,password) => {
    await fire.auth().signInWithEmailAndPassword(email,password);
    // Cookies.set('user', `${getUid()}`)
  }

  const signup = async (email, password, name) =>{
    try{
      await fire.auth().createUserWithEmailAndPassword(email, password);
      return fire.auth().currentUser.updateProfile({
        displayName: name
      })
    }
    catch(e){
      console.log(e)
    }
  }

  const getUsername = () => {
    return fire.auth().currentUser && fire.auth().currentUser.displayName
  }

  const getUid = () =>{
    return fire.auth().currentUser && fire.auth().currentUser.uid
  }

  return (
    <AuthContext.Provider value={{currentUser, redirect, signin, signup, getUsername, getUid}}>
      {props.children}
    </AuthContext.Provider>
  );
}
 
export default AuthContextProvider;