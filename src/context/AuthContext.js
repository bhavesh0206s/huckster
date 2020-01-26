import React, { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../firebase'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(()=>{
    app.auth().onAuthStateChanged((user)=>{
      if(user){
        setCurrentUser(user)
      }
      else{
        setCurrentUser(null)
      }
    })
  },[currentUser])
  return (
    <AuthContext.Provider value={{currentUser}}>
      {props.children}
    </AuthContext.Provider>
  );
}
 
export default AuthContextProvider;