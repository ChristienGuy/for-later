import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB7nu9Pk-UWJmaGaisI28w2IZVh23AqYdc",
  authDomain: "bookmarks-3afe4.firebaseapp.com",
  databaseURL: "https://bookmarks-3afe4.firebaseio.com",
  projectId: "bookmarks-3afe4",
  storageBucket: "bookmarks-3afe4.appspot.com",
  messagingSenderId: "219577419857"
};

firebase.initializeApp(config);

const googleProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const firestore = firebase.firestore();
firestore.settings({
  timestampsInSnapshots: true
});

export { firebase as default, googleProvider, auth, firestore };
