import React, { useEffect, useRef, useState } from "react";
import InputGrp from "@/components/SignUp-Login/InputGrp";
import Input from "@/components/SignUp-Login/input";
import Select from "@/components/SignUp-Login/Select";
import { SelectInterface } from "@/interfaces/Select.interface";
import apiGetRequestHandler from "@/requestHandlers/apiGetRequestHandler";

const SelectLocation = ({ inputs }: { inputs: Array<SelectInterface> }) => {
  let [countries, setCountries] = useState([]);
  let [provinces, setProvinces] = useState([]);
  let [cities, setCities] = useState([]);

  useEffect(() => {
    apiGetRequestHandler("/addresses/countries").then((res: any) => {
      setCountries(res.data);
    });
  }, []);

  useEffect(() => {
    if (inputs[0].value !== "") loadProvinces();
  }, [inputs[0].value]);

  useEffect(() => {
    if (inputs[1].value !== "") loadCities();
  }, [inputs[1].value]);
  const loadProvinces = () => {
    apiGetRequestHandler(`/addresses/provinces/${inputs[0].value}`)
      .then((res: any) => {
        setProvinces(res.data);
      })
      .catch(() => setProvinces([]));
  };

  const loadCities = () => {
    apiGetRequestHandler(`/addresses/cities/${inputs[1].value}`)
      .then((res: any) => {
        setCities(res.data);
      })
      .catch(() => setCities([]));
  };
  console.error(inputs[0].value);
  return (
    <>
      <div className="flex justify-between gap-5">
        <>
          <Select
            // @ts-ignore
            name={inputs[0].name}
            value={inputs[0].value}
            onChange={(e) => {
              inputs[0].onChange(e);
            }}
            // @ts-ignore
            options={countries}
          />
          <Select
            // @ts-ignore
            name={inputs[1].name}
            value={inputs[1].value}
            onChange={(e) => {
              inputs[1].onChange(e);
            }}
            // @ts-ignore
            options={provinces}
            disabled={provinces.length === 0}
          />
        </>
      </div>
      <Select
        name={inputs[2].name}
        value={inputs[2].value}
        disabled={cities.length === 0}
        options={cities}
        onChange={(e: any) => inputs[2].onChange(e)}
      />
    </>
  );
};

export default SelectLocation;
