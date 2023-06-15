import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // LogIn
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // LogOut
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  // googleSign
  const google = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // user on State Change
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (userInfo) => {
      setUser(userInfo);
      if (userInfo) {
        axios
          .post("https://dance-academy-server-xi.vercel.app/jwt", {
            email: userInfo?.email,
          })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });

    return () => {
      unsubcribe();
    };
  }, []);

  const authInfo = {
    user,
    signUp,
    login,
    logout,
    loading,
    google,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
