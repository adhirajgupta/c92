import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDJ2yiEJsL-PWcSEn3dIG81_b5PaUXPwqI",
  authDomain: "c92-21dd1.firebaseapp.com",
  databaseURL: "https://c92-21dd1.firebaseio.com",
  projectId: "c92-21dd1",
  storageBucket: "c92-21dd1.appspot.com",
  messagingSenderId: "15912166915",
  appId: "1:15912166915:web:b7d39ab02c823df11e1036"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
