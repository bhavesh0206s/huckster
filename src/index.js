import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

var firebaseConfig = {
  apiKey: "AIzaSyAoUPAvtYuWDSZ2UDT9-saqOBmuIhlbL8g",
  authDomain: "sample-project-b0acd.firebaseapp.com",
  databaseURL: "https://sample-project-b0acd.firebaseio.com",
  projectId: "sample-project-b0acd",
  storageBucket: "sample-project-b0acd.appspot.com",
  messagingSenderId: "965710589798",
  appId: "1:965710589798:web:38079b51f90ff4b34de2a7",
  measurementId: "G-W5935JPE0W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
