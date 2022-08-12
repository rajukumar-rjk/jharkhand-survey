import { useAuth } from "../context/AuthContext";
import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();
  async function handleLogOut() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          {/* <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link> */}
          <Nav.Link to="/user" as={NavLink}>
            User
          </Nav.Link>
          <Nav.Link to="/question" as={NavLink}>
            Question
          </Nav.Link>
          <Nav.Link to="/tracking" as={NavLink}>
            Tracking
          </Nav.Link>
          <Nav.Link to="/download" as={NavLink}>
            Download
          </Nav.Link>
        </Nav>
        {currentUser?.email}
        <Button variant="link" onClick={handleLogOut}>
          Log Out
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
