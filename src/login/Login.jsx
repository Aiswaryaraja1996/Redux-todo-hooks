import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/action";
import { Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function Login() {
  const [userName, setUserName] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const isAuth = useSelector((state) => state.auth.isAuth);
  //   const { token } = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    return fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userName, password: password }),
    })
      .then((res) => res.json())
      .then((res) => {
        const actionLogin = actions.loginSuccess(res);
        dispatch(actionLogin);
      });
  };

  if (isAuth) {
    return <Redirect to="/todo" />;
  }
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h3>Login Page</h3>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
