import React from "react";
import { Button, Image } from "react-bootstrap";
import colors from "../data/Colors";

function LandingPage({loginBtn, registerBtn}) {
  return (
    <div
      className="text-center"
      style={{
        paddingTop: window.innerHeight / 5,
        fontSize: 14,
      }}
    >
      <Image
        width="50"
        className="rounded mx-auto d-block mt-5 mb-5"
        src="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png"
      />

      <p>Welcome to Front Desk</p>
      <p>Login with your Front Desk account to continue</p>
      <Button variant="success" size="sm" onClick={loginBtn}>
        Log in
      </Button>
      <Button variant="success" size="sm" onClick={registerBtn}>
        Sign up
      </Button>
    </div>
  );
}

export default LandingPage;
