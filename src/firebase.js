import firebase from "firebase";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCIoAwDb-e2dvJX6jxQHsJqoNvNKj2QL_s",
  authDomain: "react-instagram-replica.firebaseapp.com",
  projectId: "react-instagram-replica",
  storageBucket: "react-instagram-replica.appspot.com",
  messagingSenderId: "163870389978",
  appId: "1:163870389978:web:6f8ba4d26c1090620bd7e3",
  measurementId: "G-X0LZR3DNX0"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
