import React, { useState } from "react";
import Link from "next/link";

function Sign_up() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwdConfirm, setPasswdConfirm] = useState("");
  const [matching, setMatching] = useState(true);

  const [category, setCategory] = useState("student");
  const [phoneNumber, setPhoneNumber] = useState("");
  // Signup for schools

  const countries = ["Algeria"];
  const provinces = ["Algiers"];
  const cities = [
    "Mahelma",
    "Sidi Abdelah",
    "Zeralda",
    "Bordj El Bahri",
    "Ain Taya",
  ];

  return (
    <div className="Sign_up ">
      <nav id="navbar" className="navbar">
        <Link href={"/"}>
          <h2 className="logo"> Website Logo </h2>
        </Link>
        <ul>
          <li>
            Have an account?
            <Link href="/login">
              <span className={"mx-1 hover:p-2"}> Log in </span>
            </Link>
            instead
          </li>
        </ul>
      </nav>
      <div className="wrapper">
        <div className="registration_form">
          <div className="title">Welcome to XXXX</div>

          <form>
            <div className="form_wrap">
              <div className="input_grp">
                <div className="input_wrap">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    value={firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </div>
                <div className="input_wrap">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    value={lastname}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
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
                <label htmlFor="conf">Confirm Password</label>
                <input
                  type="password"
                  id={"conf"}
                  value={passwdConfirm}
                  onChange={(e) => {
                    setPasswdConfirm(e.target.value);
                  }}
                  onBlur={() => {
                    if (passwdConfirm !== passwd) setMatching(false);
                    else setMatching(true);
                  }}
                />
                {!matching && (
                  <div className={"text-right text-red-600"}>
                    Unmatching Password
                  </div>
                )}
              </div>
              <div className="input_wrap">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>

              <div className="input_wrap">
                <div className="category">
                  <input
                    type="radio"
                    name="cat"
                    id="student"
                    value={"student"}
                    checked={category === "student"}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                  <label htmlFor="student">Student</label>
                  <input
                    type="radio"
                    name="cat"
                    checked={category === "educator"}
                    id="educator"
                    value={"educator"}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                  <label htmlFor="educator">Educator</label>
                </div>
              </div>

              <div className="input_wrap">
                <input
                  type="submit"
                  value="Create Account"
                  className="submit_btn"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;
