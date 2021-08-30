import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDWwDz2JErn7MJOaYcoIxanRMHaIdANhNw",
  authDomain: "netflix-clone-mini-proj.firebaseapp.com",
  projectId: "netflix-clone-mini-proj",
  storageBucket: "netflix-clone-mini-proj.appspot.com",
  messagingSenderId: "1023549416284",
  appId: "1:1023549416284:web:27aa3c60a94e251d599799",
};

const firebaseAPP = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
