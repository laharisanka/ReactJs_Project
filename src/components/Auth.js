// src/components/Auth.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Auth = () => {
  const [username, setUsername] = useState("");
  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn(username);
  };

  return (
    <div>
      <h1>Auth</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Auth;
