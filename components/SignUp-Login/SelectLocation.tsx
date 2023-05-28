import React, { useContext, useEffect, useState } from "react";
import Select from "@/components/SignUp-Login/Select";
import { SelectInterface } from "@/interfaces/Select.interface";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import cookie from "js-cookie";
import { SearchSubmitContext } from "@/pages/home";
const SelectLocation = ({
  inputs,
  styled,
}: {
  styled?: boolean;
  inputs: Array<SelectInterface>;
}) => {
  let { submit, setSubmit } = useContext(SearchSubmitContext);
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
            styled={styled}
            name={inputs[0].name}
            value={inputs[0].value as string}
            onChange={(e) => {
              if (cities.length === 0 || inputs[1].value === "")
                if (setSubmit !== undefined) setSubmit(!submit);
              inputs[0].onChange(e);
            }}
            options={countries === undefined ? [] : countries}
          />
          <Select
            styled={styled}
            name={inputs[1].name}
            value={inputs[1].value as string}
            onChange={(e) => {
              if (setSubmit !== undefined) {
                // @ts-ignore
                setSubmit(!submit);
              }
              inputs[1].onChange(e);
            }}
            options={provinces}
            disabled={provinces.length === 0 || inputs[0].value === ""}
          />
        </>
      </div>
      <Select
        styled={styled}
        name={inputs[2].name}
        value={inputs[2].value as string}
        disabled={cities.length === 0 || inputs[1].value === ""}
        options={cities}
        onChange={(e: any) => {
          if (setSubmit !== undefined) setSubmit(!submit);
          inputs[2].onChange(e);
        }}
      />
    </>
  );
};

export default SelectLocation;
