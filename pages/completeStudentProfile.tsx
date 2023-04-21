import React, { useState } from "react";

function Sign_up() {
  // Signup for schools
  const [street, setStreet] = useState("");
  const [cityName, setCityName] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

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
      <div className="wrapper">
        <div className="registration_form">
          <div className="title">Complete Profile Info</div>
          <form>
            <div className="form_wrap">
              <div className="input_grp">
                <div className="input_wrap">
                  <label htmlFor="city">Country</label>
                  <select
                    id={"Country"}
                    value={country}
                    onChange={(event) => {
                      setCountry(event.target.value);
                    }}
                    className={
                      "w-[165px] rounded-xl outline-none p-3 border border-[#9597a6] duration-300 bg-white focus:shadow-[2px_2px_3px_#1ACD77]"
                    }
                  >
                    <option defaultChecked>Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input_wrap">
                  <label htmlFor="province">Province</label>
                  <select
                    id={"province"}
                    value={province}
                    onChange={(event) => {
                      setProvince(event.target.value);
                    }}
                    className={
                      "w-[165px] rounded-xl outline-none p-3 border border-[#9597a6] duration-300 bg-white focus:shadow-[2px_2px_3px_#1ACD77]"
                    }
                  >
                    <option defaultChecked>Province</option>
                    {provinces.map((province) => (
                      <option key={country} value={country}>
                        {province}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="input_grp">
                <div className="input_wrap">
                  <label htmlFor="city">City</label>
                  <select
                    id={"City"}
                    value={cityName}
                    onChange={(event) => {
                      setCityName(event.target.value);
                    }}
                    className={
                      "w-[165px] rounded-xl outline-none p-3 border border-[#9597a6] duration-300 bg-white focus:shadow-[2px_2px_3px_#1ACD77]"
                    }
                  >
                    <option defaultChecked>City</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
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
