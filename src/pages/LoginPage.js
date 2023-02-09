import React, { useState } from 'react'
import Header from '../components/Header';


function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [user, setUser] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const userLogins = { username, password, remember };
    console.log(userLogins);
    // logic to send send the username and password to the server

    //   setUser(response.data);
    setUser(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthbWJ1YW1hd2lhQGdtYWlsLmNvbSIsImlhdCI6MTY3NTk0OTQxOCwiZXhwIjoxNjc1OTkyNjE4fQ.w5Dv265tE4s8I-8ORO72QYYNKwMFzmKbktltx0mrF78"
    );

    localStorage.setItem("user", user);

    setUsername("");
    setPassword("");
    setRemember(false);
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
  );
}

export default LoginPage