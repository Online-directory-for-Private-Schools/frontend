import { useRouter } from "next/router";
import React, { useState } from "react";
import Form from "@/components/SignUp-Login/form";
import Input from "@/components/SignUp-Login/input";
import Radio from "@/components/SignUp-Login/radio";
import { activenessOptions } from "./activenessOptions";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { handleAddCourse } from "@/requestHandlers/handleAddCourse";
import { Modules } from "@/components/Utils/Modules";

function AddCourse({id} : {id : number}) {
  // Shared Info between School and Educator

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [teacher_name, setTeacher_name] = useState("");
  const [isActive, setIsActive] = useState("active");
  const [pricePerSession, setPricePerSession] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [level, setLevel] = useState("");
  const [year, setYear] = useState("");
  const [moduleId, setSchoolModule] = useState("");
  const [nonAcademicTypeId, setNonAcademicTypeId] = useState("");

  

  // error message
  let [message, setErrorMessage] = useState("");

  const router = useRouter();
  const addCourseHandler: Function = (e: any, setSpinner: Function) => {
    e.preventDefault();

    const handlerFactory = new HandlerFactory("add-course");

    let body = {
      title,
      teacher_name,
      description,
      isActive,
      schoolId : id,
      pricePerSession,
      monthlyPrice,
      moduleId,
      nonAcademicTypeId,
    }
    const addCourseHandler = handlerFactory.createHandler(body) as handleAddCourse;

    console.log(body)

    addCourseHandler.execute({
      setErrorMessage: setErrorMessage,
      setSpinner,
      router: router,
    });
  };

  activenessOptions.map(
    (option: any) =>
      (option.onChange = (event: any) => setIsActive(event.target.value))
  );

  const modules = [
    {
      name: "Level",
      value: level,
      onChange: (e: any) => setLevel(e.target.value),
    },
    {
      name: "Year",
      value: year,
      onChange: (e: any) => {
        setYear(e.target.value);
      },
    },
    {
      name: "Module",
      value: moduleId,
      onChange: (e: any) => setSchoolModule(e.target.value),
    },
  ];


  return (
    <div>
      <Form
        title={"Create Course"}
        errorMessage={message}
        onSubmit={addCourseHandler}
        submitMessage={"Add Course"}
      >
        <>
          <Input
            type="text"
            label={"Title"}
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />

          <Input
            type="text"
            label={"Teacher"}
            value={teacher_name}
            onChange={(e: any) => setTeacher_name(e.target.value)}
          />

          <Input
            type="text"
            label={"Description"}
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
          />

          <Input
            type="text"
            label="Price per Session (DA)"
            value={pricePerSession}
            onChange={(e: any) => {
              if (
                !isNaN(e.target.value) &&
                e.target.value[e.target.value.length - 1] !== " "
              )
                setPricePerSession(e.target.value);
            }}
          />

          <Input
            type="text"
            label="Monthly Price (DA)"
            value={monthlyPrice}
            onChange={(e: any) => {
              if (
                !isNaN(e.target.value) &&
                e.target.value[e.target.value.length - 1] !== " "
              )
                setMonthlyPrice(e.target.value);
            }}
          />
          <Modules inputs={modules} />
          <Radio
            label="Is the course Active?"
            value={isActive}
            name={"isActive"}
            options={activenessOptions}
          />
        </>
      </Form>
    </div>
  );
}

export default AddCourse;
