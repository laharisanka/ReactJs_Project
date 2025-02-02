// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const signIn = (username) => {
    const user = { username };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
