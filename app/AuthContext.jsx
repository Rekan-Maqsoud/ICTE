import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [LoggedIn, setLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ LoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export default function fuckOff (){
  return {AuthContext,AuthProvider}
}