import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyANrp_FnwraW-USHNiPLmPqwOUB6fmnsXA',
  authDomain: 'crwn-db-5a2e4.firebaseapp.com',
  projectId: 'crwn-db-5a2e4',
  storageBucket: 'crwn-db-5a2e4.appspot.com',
  messagingSenderId: '970016585834',
  appId: '1:970016585834:web:1188e3a7354267ce9f3213',
  measurementId: 'G-H8NNPW46V8',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
