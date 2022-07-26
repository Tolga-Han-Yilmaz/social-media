import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  query,
  where,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

// register
export const register = async (email, password, navigate, wrong, success) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    success("Registration Successful");
    return user;
  } catch (error) {
    console.log(error);
    navigate("/register");
    wrong(error.mesage);
  }
};

// login
export const login = async (email, password, navigate, wrong, success) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    success("Login successful");
    return user;
  } catch (error) {
    wrong(error.mesage);
    navigate("/login");
  }
};

// google login
const provider = new GoogleAuthProvider();
export const googleLogin = (navigate, wrong, success) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      success("Login successful");
      navigate("/");
    })
    .catch((error) => {
      wrong(error.mesage);
    });
};

// logout
export const logout = async (navigate, success) => {
  await signOut(auth);
  navigate("/login");
  success("exit successful");
  return true;
};

export default app;
