import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { login, register } from "../api/AppApi";
import colors from "../data/Colors";
import "bootstrap/dist/css/bootstrap.css";

function AuthPage() {
  const [user, setUser] = useState();
  const [reg, setReg] = useState(false);

  useEffect(() => {
    // console.log('login');
  }, [user]);
  //Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    const userLogins = { email, password };

    // logic to send send the username and password to the server
    const response = await login(userLogins);
    if (response) {
      localStorage.setItem("user", response);
      setEmail("");
      setPassword("");
      setRemember(false);
      setUser(localStorage.getItem(user));
      window.location.reload();
    } else {
      console.log("Couldn't remember user logins");
    }
  };

  const onRegister = async (e) => {
    e.preventDefault();
    const userReg = { email, password, confirmPassword };

    const response = await register(userReg);
    if (response) {
      localStorage.setItem("user", response);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRemember(false);
      setUser(localStorage.getItem(user));
      window.location.reload();
    } else {
      console.log("Couldn't remember user register details");
    }
  };

  return (
    <div>
      {reg ? (
        <Form onSubmit={onRegister}>
          <Row>
            <Col></Col>
            <Col md="auto">
              <Image
                width="100"
                className="rounded mx-auto d-block mt-5 mb-1"
                src="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png"
              />
              <h3>Register</h3>

              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label
                  className="text-default mb-1 text-center"
                  style={{ fontSize: 14, color: colors.davysGray }}
                >
                  Email address
                </Form.Label>
                <Form.Control
                  style={{ marginTop: 0 }}
                  type="email"
                  placeholder="youremail@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label
                  className="mb-1"
                  style={{ fontSize: 14, color: colors.davysGray }}
                >
                  Password
                </Form.Label>
                <Form.Control
                  style={{ marginTop: 0 }}
                  type="password"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label
                  className="mb-1"
                  style={{ fontSize: 14, color: colors.davysGray }}
                >
                  Confirm Password
                </Form.Label>
                <Form.Control
                  style={{ marginTop: 0 }}
                  type="password"
                  placeholder="*******"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicCheckbox">
                <Form.Check
                  style={{ fontSize: 12, color: colors.davysGray }}
                  type="checkbox"
                  label="Remember me?"
                  value={remember}
                  checked={remember}
                  onChange={(e) => setRemember(e.currentTarget.checked)}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="success" type="submit" size="sm">
                  Sign Up
                </Button>
              </div>
              <p
                style={{ color: colors.davysGray, fontSize: 12 }}
                className="text-center"
              >
                Already have an account?{" "}
                <span
                  className="text-primary"
                  style={{ color: colors.davysGray, fontSize: 12 }}
                  onClick={() => setReg(false)}
                >
                  Login
                </span>
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      ) : (
        <Form onSubmit={onLogin}>
          <Row>
            <Col></Col>
            <Col md="auto">
              <Image
                width="100"
                className="rounded mx-auto d-block mt-5 mb-1"
                src="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png"
              />
              <h3>Login</h3>

              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label
                  className="text-default mb-1 text-center"
                  style={{ fontSize: 14, color: colors.davysGray }}
                >
                  Email address
                </Form.Label>
                <Form.Control
                  style={{ marginTop: 0 }}
                  type="email"
                  placeholder="youremail@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label
                  className="mb-1"
                  style={{ fontSize: 14, color: colors.davysGray }}
                >
                  Password
                </Form.Label>
                <Form.Control
                  style={{ marginTop: 0 }}
                  type="password"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicCheckbox">
                <Form.Check
                  style={{ fontSize: 12, color: colors.davysGray }}
                  type="checkbox"
                  label="Remember me?"
                  value={remember}
                  checked={remember}
                  onChange={(e) => setRemember(e.currentTarget.checked)}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="success" type="submit" size="sm">
                  Log In
                </Button>
              </div>
              <p
                style={{
                  color: colors.davysGray,
                  fontSize: 12,
                  cursor: "grab",
                }}
                className="text-center"
              >
                Don't have an account?{" "}
                <span
                  className="text-primary"
                  style={{
                    color: colors.davysGray,
                    fontSize: 12,
                    cursor: "grab",
                  }}
                  onClick={() => setReg(true)}
                >
                  Register
                </span>
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      )}
    </div>
  );
}

export default AuthPage;
