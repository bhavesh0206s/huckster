import * as firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

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
const fire = firebase.initializeApp(firebaseConfig)
export default fire;