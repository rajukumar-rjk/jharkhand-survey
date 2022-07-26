import { useState, useRef, useEffect } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
export function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/user");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (currentUser) {
      navigate("/user");
    }
  }, []);
  return (
    <>
      <Container
        className="d-flex align-item-center justify-content-center mt-5"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
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

                <Button type="submit" className="w-100 mt-2" disabled={loading}>
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an Account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
