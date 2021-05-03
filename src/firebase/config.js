import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/functions";
var firebaseConfig = {
  apiKey: "AIzaSyC1CNAukoCRoDiXjBNw_7oZMm0kOKQ85I4",
  authDomain: "stock-exchange-planing.firebaseapp.com",
  projectId: "stock-exchange-planing",
  storageBucket: "stock-exchange-planing.appspot.com",
  messagingSenderId: "282959570455",
  appId: "1:282959570455:web:f1db547a5b32f26e071e52",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
