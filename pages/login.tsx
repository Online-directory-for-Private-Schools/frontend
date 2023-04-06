import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  return (
    <div className="Login">
      <nav id="navbar" className="navbar">
        <h2 className="logo"> Website Logo </h2>
        <ul>
          <li>
            New here ?{" "}
            <a href="">
              <span> Sign up </span>
            </a>{" "}
            instead
          </li>
        </ul>
      </nav>

      <div className="wrapper">
        <div className="registration_form">
          <div className="title">Welcome back !</div>

          <form>
            <div className="form_wrap">
              <div className="input_wrap">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="input_wrap">
                <label htmlFor="passwd">Password</label>
                <input
                  type="password"
                  id="pwd"
                  value={passwd}
                  onChange={(e) => {
                    setPasswd(e.target.value);
                  }}
                />
              </div>

              <div className="input_wrap">
                <input type="submit" value="Continue" className="submit_btn" />
              </div>
              <br />
              <br />
              <div className="forgot_pwd">
                <a> Forgot password ?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
