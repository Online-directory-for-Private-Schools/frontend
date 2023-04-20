import React, { useState } from "react";
import Link from "next/link";

function Sign_up() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwdConfirm, setPasswdConfirm] = useState("");
  const [category, setCategory] = useState("student");
  const [phoneNumber, setPhoneNumber] = useState("");
  // Signup for schools
  const [schoolName, setSchoolName] = useState("");
  const [street, setStreet] = useState("");
  const [cityName, setCityName] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [isHiring, setIsHiring] = useState(false);
  const [bio, setBio] = useState("");

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
                />
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
                <br />
                {/*Only show this section for educators*/}
                {category === "educator" && (
                  <>
                    <div className="input_wrap">
                      <label htmlFor="school_name">School Name</label>
                      <input
                        type="text"
                        id="school_name"
                        value={schoolName}
                        onChange={(e) => {
                          setSchoolName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="input_grp">
                      <div className="input_wrap">
                        <label htmlFor="street">Street</label>
                        <input
                          type="text"
                          id="street"
                          value={street}
                          onChange={(e) => {
                            setStreet(e.target.value);
                          }}
                        />
                      </div>
                      <div className="input_wrap">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          id="city"
                          value={cityName}
                          onChange={(e) => {
                            setCityName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="input_grp">
                      <div className="input_wrap">
                        <label htmlFor="province">Province</label>
                        <input
                          type="text"
                          id="province"
                          value={province}
                          onChange={(e) => {
                            setProvince(e.target.value);
                          }}
                        />
                      </div>
                      <div className="input_wrap">
                        <label htmlFor="country">Country</label>
                        <input
                          type="text"
                          id="country"
                          value={country}
                          onChange={(e) => {
                            setCountry(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="input_wrap">
                      <label htmlFor="bio">
                        School Biography
                        <span className={"text-gray-500"}> (optional)</span>
                      </label>
                      <textarea
                        className={
                          "w-full outline-none border border-[#9597a6] p-3 rounded-xl resize-none"
                        }
                        id="bio"
                        value={bio}
                        onChange={(e) => {
                          if (bio.length < 255) setBio(e.target.value);
                        }}
                      />
                    </div>
                    <div className="input_wrap">
                      <p>
                        Are you hiring?{" "}
                        <span className={"text-gray-500"}> (optional)</span>
                      </p>
                      <div className="category">
                        <input
                          type="radio"
                          name="hiring"
                          id="Yes"
                          value={"Yes"}
                          checked={isHiring}
                          onChange={(e) => {
                            if (!isHiring) setIsHiring(true);
                          }}
                        />
                        <label htmlFor="Yes">Yes</label>
                        <input
                          type="radio"
                          name="hiring"
                          checked={!isHiring}
                          id="No"
                          value={"No"}
                          onChange={(e) => {
                            if (isHiring) setIsHiring(false);
                          }}
                        />
                        <label htmlFor="No">No</label>
                      </div>
                    </div>
                  </>
                )}
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
