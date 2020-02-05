import React, { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fire from '../firebase'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const [isLoading, setLoading] = useState(false)
  
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
    setLoading(true)
    await fire.auth().signInWithEmailAndPassword(email,password);
    setLoading(false)
    // Cookies.set('user', `${getUid()}`)
  }

  const signup = async (email, password, name) =>{
    try{
      setLoading(true)
      await fire.auth().createUserWithEmailAndPassword(email, password);
      setLoading(false)
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
    <AuthContext.Provider value={{isLoading,currentUser, redirect, signin, signup, getUsername, getUid}}>
      {props.children}
    </AuthContext.Provider>
  );
}
 
export default AuthContextProvider;