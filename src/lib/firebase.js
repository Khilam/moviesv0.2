import firebase from 'firebase/app'
import  'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDtK0PZL0lQaTfA-DkicUGpbg2hSDAK-FY",
    authDomain: "movies-125cc.firebaseapp.com",
    databaseURL: "https://movies-125cc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "movies-125cc",
    storageBucket: "movies-125cc.appspot.com",
    messagingSenderId: "217626000502",
    appId: "1:217626000502:web:6f3f929d18a53bce09b357",
    measurementId: "G-8CC4HG4MKY"
  };


firebase.initializeApp(firebaseConfig)

export default firebase