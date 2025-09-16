// The AI code was generated, but please review it carefully to ensure it meets your requirements.
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { firebaseConfig } from "@/lib/firebase-config";

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

// Sign up function
const signUp = async (name: string, email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  // Store user data in Firestore
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name: name,
    email: user.email,
    createdAt: new Date(),
  });
  return user;
};

// Sign in function
const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Google Sign-In function
const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    // Check if user exists in Firestore, if not create a new document
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
        await setDoc(userDocRef, {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            avatarUrl: user.photoURL,
            createdAt: new Date(),
        });
    }
    return user;
};

// Sign out function
const logOut = () => {
  return signOut(auth);
};

// Password reset function
const sendPasswordReset = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};


export { auth, db, signUp, signIn, logOut, sendPasswordReset, signInWithGoogle };