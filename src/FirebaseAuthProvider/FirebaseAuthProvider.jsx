/* eslint-disable react/prop-types */
import {
    GithubAuthProvider,
    GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./../Firebase/firebaseConfig";


export const AuthContext = createContext(null);

//social auth providers
const googleLoginProvider = new GoogleAuthProvider();
const githubLoginProvider = new GithubAuthProvider();
const twitterLoginProvider = new TwitterAuthProvider();

const FirebaseAuthProvider = ({ children }) => {
    
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true)

  //create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleLoginProvider);
  };
  // github login
  const githubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, githubLoginProvider);
  };
  // twitter login
  const twitterLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, twitterLoginProvider);
  };


  //logout
  const logout =()=>{
    setUser(null)
    signOut(auth)
  }
  // observer
  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      }
    });
    return ()=> unsubscribe()
  }, []);

  const allValues = {
    createUser,
    user,
    signInUser,
    googleLogin,
    githubLogin,
    twitterLogin,
    logout,
    loading,
    
  };
  return (
    <div>
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
    </div>
  );
};

export default FirebaseAuthProvider;
