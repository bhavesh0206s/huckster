import * as firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'
import { config } from './config/config';

var firebaseConfig = {
  apiKey: config.APIKEY,
  authDomain: config.AUTHDOMAIN,
  databaseURL: config.DATABASEURL,
  projectId: config.PROJECTID,
  storageBucket: config.STORAGEBUCKET,
  messagingSenderId: config.MESSAGINGSENDERID,
  appId: config.APPID,
  measurementId: config.MEASUREMENTID 
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig)
export const storage = firebase.storage();
export const fireDb = fire.firestore()

export default fire;