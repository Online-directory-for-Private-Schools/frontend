import React, { useContext, useEffect, useState } from "react";
import Select from "@/components/SignUp-Login/Select";
import { SelectInterface } from "@/interfaces/Select.interface";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import cookie from "js-cookie";
import { SearchSubmitContext } from "@/pages/home";

const levelNames = ["", "Primary", "Middle", "Secondary"];
function getLevels(
  level: Array<{ id: number; level: number; years: Array<any> }>
) {
  let output: Array<{ id: string; name: string }> = [];
  level.forEach((elem) => {
    output.push({ id: elem.level.toString(), name: levelNames[elem.level] });
  });

  return output;
}
function getYears(years: Array<{ id: number; year: number }>) {
  let output: Array<{ id: string; name: string }> = [];

  // @ts-ignore
  years.forEach((elem: any) => {
    output.push({ id: elem.year.toString(), name: elem.year.toString() });
  });

  return output;
}

function getModules(
  modules: Array<{
    id: string;
    name: string;
    name_ar: string;
    name_fr: string;
    stream?: { id: number; name: string; name_ar: string; name_fr: string };
  }>
) {
  let output: Array<{ id: string; name: string }> = [];
  modules.forEach((elem) => {
    if (elem.stream)
      output.push({
        id: elem.id,
        name: elem.name + " / " + elem.stream.name,
      });
    else
      output.push({
        id: elem.id,
        name: elem.name,
      });
  });

  return output;
}
export const Modules = ({ inputs }: { inputs: Array<SelectInterface> }) => {
  let [resp, setResp] = useState<any>([]);

  let [levels, setLevels] = useState<Array<{ id: string; name: string }>>([]);
  let [years, setYears] = useState<Array<{ id: string; name: string }>>([]);
  let [modules, setModules] = useState<Array<{ id: string; name: string }>>([]);
  let { submit, setSubmit } = useContext(SearchSubmitContext);

  const requestHandlerConstructor = new HandlerFactory("general");
  const requestHandler = requestHandlerConstructor.createHandler();

  useEffect(() => {
    requestHandler
      .get(
        "/school-modules/levels",
        "/?eager=true",
        cookie.get("token") as string
      )
      .then((res: any) => {
        setResp(res.data);
        if (res.error || !res.data) setLevels([]);
        setLevels(getLevels(res.data.levels));
      })
      .catch(() => setLevels([]));
  }, []);

  useEffect(() => {
    if (inputs[0].value !== "") loadYears();
  }, [inputs[0].value]);

  useEffect(() => {
    if (inputs[1].value !== "") loadModules();
  }, [inputs[1].value]);
  const loadYears = () => {
    resp.levels.forEach((level: any) => {
      if (Number(level.level) === Number(inputs[0].value)) {
        setYears(getYears(level.years));
      }
    });
  };

  const loadModules = () => {
    resp.levels.forEach((level: any) => {
      if (Number(level.level) === Number(inputs[0].value)) {
        level.years.forEach((year: any) => {
          if (Number(year.year) === Number(inputs[1].value)) {
            setModules(getModules(year.modules));
            return;
          }
        });
      }
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <>
          <Select
            name={inputs[0].name}
            value={inputs[0].value as string}
            onChange={(e) => {
              if (years.length === 0 || inputs[1].value === "")
                if (setSubmit !== undefined) setSubmit(!submit);
              inputs[0].onChange(e);
            }}
            options={levels === undefined ? [] : levels}
          />
          <Select
            name={inputs[1].name}
            value={inputs[1].value as string}
            onChange={(e) => {
              if (setSubmit !== undefined) {
                // @ts-ignore
                setSubmit(!submit);
              }
              inputs[1].onChange(e);
            }}
            options={years}
            disabled={years.length === 0 || inputs[0].value === ""}
          />
        </>
      </div>
      <Select
        name={inputs[2].name}
        value={inputs[2].value as string}
        disabled={modules.length === 0 || inputs[1].value === ""}
        options={modules}
        onChange={(e: any) => {
          if (setSubmit !== undefined) setSubmit(!submit);
          inputs[2].onChange(e);
        }}
      />
    </>
  );
};
