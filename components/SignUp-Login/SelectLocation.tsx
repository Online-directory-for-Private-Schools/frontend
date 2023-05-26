import React, { useEffect, useState } from "react";
import Select from "@/components/SignUp-Login/Select";
import { SelectInterface } from "@/interfaces/Select.interface";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import cookie from "js-cookie";
const SelectLocation = ({ inputs }: { inputs: Array<SelectInterface> }) => {
  let [countries, setCountries] = useState([]);
  let [provinces, setProvinces] = useState([]);
  let [cities, setCities] = useState([]);
  const requestHandlerConstructor = new HandlerFactory("general");
  const requestHandler = requestHandlerConstructor.createHandler();

  useEffect(() => {
    requestHandler
      .get("/addresses/countries", "", cookie.get("token") as string)
      .then((res: any) => {
        if (res.error || !res.data) setCountries([]);
        setCountries(res.data);
      })
      .catch(() => setCountries([]));
  }, []);

  useEffect(() => {
    if (inputs[0].value !== "") loadProvinces();
  }, [inputs[0].value]);

  useEffect(() => {
    if (inputs[1].value !== "") loadCities();
  }, [inputs[1].value]);
  const loadProvinces = () => {
    requestHandler
      .get(
        `/addresses/provinces/${inputs[0].value}`,
        "",
        cookie.get("token") as string
      )
      .then((res: any) => {
        if (res.error || !res.data) setProvinces([]);
        setProvinces(res.data);
      })
      .catch(() => setProvinces([]));
  };

  const loadCities = () => {
    requestHandler
      .get(
        `/addresses/cities/${inputs[1].value}`,
        "",
        cookie.get("token") as string
      )
      .then((res: any) => {
        if (res.error || !res.data) setCities([]);
        setCities(res.data);
      })
      .catch(() => setCities([]));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <>
          <Select
            // @ts-ignore
            name={inputs[0].name}
            value={inputs[0].value}
            onChange={(e) => {
              inputs[0].onChange(e);
            }}
            // @ts-ignore
            options={countries === undefined ? [] : countries}
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
            disabled={provinces.length === 0 || inputs[0].value === ""}
          />
        </>
      </div>
      <Select
        name={inputs[2].name}
        value={inputs[2].value}
        disabled={cities.length === 0 || inputs[1].value === ""}
        options={cities}
        onChange={(e: any) => inputs[2].onChange(e)}
      />
    </>
  );
};

export default SelectLocation;
