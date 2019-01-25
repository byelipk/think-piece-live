import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";
import "firebase/storage";

import config from "./firebase-config.js";

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

// Usually called with {timestampsInSettings: true} but that's
// no longer needed.
firestore.settings({});

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => (auth.signInWithPopup(provider));

window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) { return; }

  // Get a ref
  const userRef = firestore.doc(`users/${user.uid}`);

  // Get a snapshot
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user", error);
    }
  }

  return getUserDocument(user.uid);
}

export const getUserDocument = async (uid) => {
  if (!uid) { return null; }

  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
}

export default firebase;