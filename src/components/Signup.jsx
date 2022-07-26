import { useState, useRef } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setLoading(false);
      return setError("password do not match");
    }
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-item-center justify-content-center mt-5"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Form.Group id="password-confirm">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>

                <Button type="submit" className="w-100 mt-2" disabled={loading}>
                  Sign up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
