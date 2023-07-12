import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD4-UyVxdQ-tFvBBpkyQNhHszwCHub-hjM",
  authDomain: "project-67-170a8.firebaseapp.com",
  projectId: "project-67-170a8",
  storageBucket: "project-67-170a8.appspot.com",
  messagingSenderId: "656097641277",
  appId: "1:656097641277:web:f6cbe1369bf549a6c6fb54"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
