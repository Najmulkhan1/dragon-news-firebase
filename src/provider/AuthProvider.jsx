import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
  }

  const LogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      Unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    LogOut,
    signInUser,
    loading,
    setLoading,
    profileUpdate
  };

  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
