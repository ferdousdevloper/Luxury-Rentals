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
  console.log(user);

  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {

    return signInWithPopup(auth, googleLoginProvider);
  };
  // github login
  const githubLogin = () => {

    return signInWithPopup(auth, githubLoginProvider);
  };
  // twitter login
  const twitterLogin = () => {

    return signInWithPopup(auth, twitterLoginProvider);
  };


  //logout
  const logout =()=>{
    setUser(null)
    signOut(auth)
  }
  // observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const allValues = {
    createUser,
    user,
    signInUser,
    googleLogin,
    githubLogin,
    twitterLogin,
    logout,
    
  };
  return (
    <div>
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
    </div>
  );
};

export default FirebaseAuthProvider;
