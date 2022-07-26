import { useState } from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { Dashboard } from "../components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import User from "./User";
import Questions from "./Questions";
import Tracking from "./Tracking";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/dashboard"
            element={<PrivateRoute Component={Dashboard} />}
          ></Route>
          <Route path="/" element={<PrivateRoute Component={Home} />}></Route>
          <Route
            path="/tracking"
            element={<PrivateRoute Component={Tracking} />}
          ></Route>
          <Route
            path="/question"
            element={<PrivateRoute Component={Questions} />}
          ></Route>
          <Route
            path="/user"
            element={<PrivateRoute Component={User} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
