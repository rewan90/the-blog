import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

firebase.initializeApp({
  apiKey: "AIzaSyBEWTVgg7DQQG8m8QWj5rb6IwF4eOhUpIU",
  authDomain: "the-blog-739d9.firebaseapp.com",
  projectId: "the-blog-739d9",
  storageBucket: "the-blog-739d9.appspot.com",
  messagingSenderId: "684682855083",
  appId: "1:684682855083:web:fd0d9e7b097ec83518edee",
});
// init firebase services
const projectFirestore = firebase.firestore();
const projectstorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectstorage };
