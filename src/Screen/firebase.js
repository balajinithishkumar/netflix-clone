// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQyHme2Ra0eNgqRNGLBjYMSHTv888kG-s",
  authDomain: "netflix-clone-nithu.firebaseapp.com",
  projectId: "netflix-clone-nithu",
  storageBucket: "netflix-clone-nithu.appspot.com",
  messagingSenderId: "111169524089",
  appId: "1:111169524089:web:eb0f35d7867cba0735dfa8",
  measurementId: "G-60M63D4K4T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
