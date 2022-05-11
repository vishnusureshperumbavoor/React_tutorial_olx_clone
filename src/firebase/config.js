import firebase from 'firebase'
import 'firebase/auth' 
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCik3hTBbh7BueyUYBqswgtnJz4WbSVaGw",
    authDomain: "clone-d03f2.firebaseapp.com",
    databaseURL: "https://clone-d03f2-default-rtdb.firebaseio.com",
    projectId: "clone-d03f2",
    storageBucket: "clone-d03f2.appspot.com",
    messagingSenderId: "793864966690",
    appId: "1:793864966690:web:3bf788ceb561b254bf707b"
  };
export default firebase.initializeApp(firebaseConfig)