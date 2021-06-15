import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhyG5RqYbT_5mXaJwW8IxdIVPjPFVaEBw",
    authDomain: "enzi-website.firebaseapp.com",
    projectId: "enzi-website",
    storageBucket: "enzi-website.appspot.com",
    messagingSenderId: "90558362642",
    appId: "1:90558362642:web:650ca236cfe673e4b2d4cb",
    measurementId: "G-J8D1Y0YMNW"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;