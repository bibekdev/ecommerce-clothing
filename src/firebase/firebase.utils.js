import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDDpmkZb_yOmVsYiRBmFUidErcxwXYa__I",
  authDomain: "myshop-b39d9.firebaseapp.com",
  projectId: "myshop-b39d9",
  storageBucket: "myshop-b39d9.appspot.com",
  messagingSenderId: "897271303443",
  appId: "1:897271303443:web:a2c24fd9ef64c5e0809ee6",
  measurementId: "G-Y9Q1RT71YR",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
