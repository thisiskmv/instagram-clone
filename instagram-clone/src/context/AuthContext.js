import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";


export const AuthContext = createContext();


export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
 console.log(currentUser)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      //  console.log(user);
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};


// import React, { createContext, useState, useEffect } from 'react';
// import { auth } from '../firebase/firebase';

// export const AuthContext = createContext();

// export const ContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     // Set up the authentication state listener
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });

//     // Clean up the listener on unmount
//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

