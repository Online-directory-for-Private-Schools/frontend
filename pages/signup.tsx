import React, { useState } from "react";
import Link from "next/link";

function Sign_up() {
  let MAX_BIO_SIZE = 255;
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
                        <label htmlFor="city">City</label>
                        <select
                          id={"City"}
                          className={
                            "w-[165px] rounded-xl outline-none p-3 border border-[#9597a6] duration-300 bg-white focus:shadow-[2px_2px_3px_#1ACD77]"
                          }
                        >
                          <option defaultChecked>City</option>
                          <option>Mahelma</option>
                          <option>Sidi Abdelah</option>
                          <option>Zeralda</option>
                          <option>Bordj El Bahri</option>
                          <option>Ain Taya</option>
                        </select>
                      </div>
                      <div className="input_wrap">
                        <label htmlFor="province">Province</label>
                        <select
                          id={"City"}
                          className={
                            "w-[165px] rounded-xl outline-none p-3 border border-[#9597a6] duration-300 bg-white focus:shadow-[2px_2px_3px_#1ACD77]"
                          }
                        >
                          <option defaultChecked>City</option>
                          <option>Mahelma</option>
                          <option>Sidi Abdelah</option>
                          <option>Zeralda</option>
                          <option>Bordj El Bahri</option>
                          <option>Ain Taya</option>
                        </select>
                      </div>
                    </div>
                    <div className="input_grp">
                      <div className="input_wrap">
                        <label htmlFor="city">City</label>
                        <select
                          id={"City"}
                          className={
                            "w-[165px] rounded-xl outline-none p-3 border border-[#9597a6] duration-300 bg-white focus:shadow-[2px_2px_3px_#1ACD77]"
                          }
                        >
                          <option defaultChecked>City</option>
                          <option>Mahelma</option>
                          <option>Sidi Abdelah</option>
                          <option>Zeralda</option>
                          <option>Bordj El Bahri</option>
                          <option>Ain Taya</option>
                        </select>
                      </div>
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
                    </div>

                    <div className="input_wrap">
                      <label htmlFor="bio">
                        School Biography
                        <span className={"text-gray-500"}> (optional)</span>
                      </label>
                      <div
                        className={
                          "relative border border-[#9597a6]  rounded-xl"
                        }
                      >
                        <textarea
                          className={
                            "w-full outline-none  rounded-xl p-3 resize-none col-span-9"
                          }
                          id="bio"
                          value={bio}
                          onChange={(e) => {
                            if (e.target.value.length <= MAX_BIO_SIZE)
                              setBio(e.target.value);
                          }}
                        />
                        <p className={"text-[10px] text-right pt-0 pr-4"}>
                          {bio.length}/{MAX_BIO_SIZE}
                        </p>
                      </div>
                    </div>
                    <div className="input_wrap">
                      <p>Are you hiring?</p>
                      <div className="category">
                        <input
                          type="radio"
                          name="hiring"
                          id="Yes"
                          value={"Yes"}
                          checked={isHiring}
                          onChange={() => {
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
                          onChange={() => {
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
