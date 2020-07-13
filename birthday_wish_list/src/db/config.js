import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import access from "./access-right";

var firebaseConfig = {
  apiKey: access.key,
  authDomain: access.domain,
  databaseURL: access.url,
  projectId: "news-9cced",
  storageBucket: "news-9cced.appspot.com",
  messagingSenderId: "578725014681",
  appId: "1:578725014681:web:2e822b1dc173ebdd561c08",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  auth: firebase.auth(),
};
