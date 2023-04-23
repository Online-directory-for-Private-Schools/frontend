import React from "react";
import { useState } from "react";
import Link from "next/link";
import LoginHandler from "@/requestHandlers/apiPostRequestHandler";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  // error message
  let [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="Login">
      <nav id="navbar" className="navbar">
        <Link href={"/"}>
          <h2 className="logo"> Website Logo </h2>
        </Link>
        <ul>
          <li>
            New here ?
            <Link href="/signup">
              <span className={"mx-1 hover:p-2"}> Sign up </span>
            </Link>
            instead
          </li>
        </ul>
      </nav>

      <div className="wrapper">
        <div className="registration_form">
          <div className="title">Welcome back !</div>
          {errorMessage !== "" && (
            <p
              className={
                "bg-red-500 p-2 rounded-2xl text-white font-bold text-center"
              }
            >
              {errorMessage}
            </p>
          )}

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
                <input
                  type="submit"
                  value="Continue"
                  className="submit_btn"
                  onClick={(e) => {
                    e.preventDefault();
                    LoginHandler(
                      "/auth/login",
                      {
                        email: email,
                        password: passwd,
                      },
                      setErrorMessage
                    );
                  }}
                />
              </div>
              <br />
              <br />
              <div className="forgot_pwd">
                <Link href={""}> Forgot password ?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
