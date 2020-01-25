import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "",
  authDomain: "sample-project-b0acd.firebaseapp.com",
  databaseURL: "https://sample-project-b0acd.firebaseio.com",
  projectId: "sample-project-b0acd",
  storageBucket: "sample-project-b0acd.appspot.com",
  messagingSenderId: "965710589798",
  appId: "1:965710589798:web:f871deeb5ccace774de2a7",
  measurementId: "G-SSQC4X804L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase