import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import accessRight from "./accessRIght";

var firebaseConfig = {
  apiKey: accessRight.key,
  authDomain: accessRight.domain,
  databaseURL: accessRight.url,
  projectId: "news-9cced",
  storageBucket: "news-9cced.appspot.com",
  messagingSenderId: "578725014681",
  appId: "1:578725014681:web:2e822b1dc173ebdd561c08",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
