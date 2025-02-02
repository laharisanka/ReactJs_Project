import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./components/Auth";
import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Router>
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
