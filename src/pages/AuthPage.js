import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { login, registerUser } from "../api/AppApi";
import colors from "../data/Colors";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function AuthPage() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().label("Password"),
    confirmPwd: Yup.string()
      .required()
      .oneOf([Yup.ref("password")], "Passwords does not match")
      .label("Confirm"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const [user, setUser] = useState();
  const [reg, setReg] = useState(false);

  //Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  const onRegister = async (userReg) => {
    const response = await registerUser(userReg);

    if (response) {
      localStorage.setItem("user", response);
      window.location.reload();
    } else {
      console.log("Couldn't remember user logins");
    }
  };

  return (
    <div>
      {reg ? (
        <Form onSubmit={handleSubmit(onRegister)}>
          <Row>
            <Col></Col>
            <Col xs="auto">
              <Image
                width="100"
                className="rounded mx-auto d-block mt-1 mb-5"
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
                  placeholder="youremail@email.com"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                <div className="invalid-feedback" style={{ fontSize: 10 }}>
                  {errors.email?.message}
                </div>
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
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback" style={{ fontSize: 10 }}>
                  {errors.password?.message}
                </div>
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
                  // value={confirmPassword}
                  // onChange={(e) => setConfirmPassword(e.target.value)}
                  {...register("confirmPwd")}
                  className={`form-control ${
                    errors.confirmPwd ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback" style={{ fontSize: 10 }}>
                  {errors.confirmPwd?.message}
                </div>
              </Form.Group>

              <div className="invalid-feedback" style={{ fontSize: 10 }}>
                {errors.confirmPwd?.message}
              </div>

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
            <Col xs="auto">
              <Image
                width="100"
                className="rounded mx-auto d-block mt-1 mb-5"
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
                  placeholder="youremail@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
