import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";
export default function PrivateRoute(props) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const { Component } = props;

  if (!currentUser) {
    console.log(currentUser);
    navigate("/login");
  } else {
    return (
      <>
        <Navbar />
        <Container>
          <Component />
        </Container>
      </>
    );
  }
}
