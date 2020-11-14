import React, { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fire, { fireDb } from '../firebase'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('')
  
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
    const userInfo = {email, password}
    await fire.auth().signInWithEmailAndPassword(email,password);
    let userid =  fire.auth().currentUser.uid;
    let userDoc = fireDb.collection('user-info').doc(`${userid}`);
    userDoc.get().then(function(doc) {
      if (!doc.exists) {
        setError('No User Found')
      } else {
        let data = doc.data()
        console.log(data);
        // await fire.auth().signInWithEmailAndPassword(email,password);
      }
    }).catch(e => console.log('error from signin: ',e))
    setLoading(false)
  }

  const signup = async (email, password, name) =>{
    try{
      let userDoc = fireDb.collection('user-info').doc('dsdasdas');
      userDoc.get().then(async function(doc) {
        if (!doc.exists) {
          userDoc.set(email, password, name)
          await fire.auth().createUserWithEmailAndPassword(email, password);
        } else {
          let data = doc.data()
          console.log(data)
        }
        setLoading(false)
      })
    }
    catch(e){
      console.log('error from signup: ',e);
      // setError(e)
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