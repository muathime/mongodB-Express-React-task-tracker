import React, { useState, useEffect } from "react";
import { login } from "../api/AppApi";
import Header from "../components/Header";

function LoginPage() {
  const [user, setUser] = useState();

  useEffect(() => {
    // console.log('login');
  }, [user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const userLogins = { email, password };

    // logic to send send the username and password to the server
    const response = await login(userLogins);
    if (response) {
      localStorage.setItem("user", response);
      setEmail("");
      setPassword("");
      setRemember(false);
      setUser(localStorage.getItem(user))
    } else {
      console.log("Couldn't remember user logins");
    }
  };

  return (
    <div className="container">
      <Header title={"Login"} />
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>User Name</label>
          <input
            className="form-control input"
            type="email"
            placeholder="eg. xxxxx@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Password</label>
          <input
            className="form-control input"
            type="password"
            placeholder="*********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-control form-control-check">
          <label>Remember me? </label>
          <input
            type="checkbox"
            value={remember}
            checked={remember}
            onChange={(e) => setRemember(e.currentTarget.checked)}
          />
        </div>

        <div className="form-control">
          <input className="btn btn-block" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );}

export default LoginPage;
