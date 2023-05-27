import { useRouter } from "next/router";
import React, { MouseEventHandler, useState } from "react";
import Form from "@/components/SignUp-Login/form";
import Input from "@/components/SignUp-Login/input";
import Radio from "@/components/SignUp-Login/radio";
import { activenessOptions } from "./activenessOptions";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { handleAddCourse } from "@/requestHandlers/handleAddCourse";

function AddCourse() {
  // Shared Info between School and Educator

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [teacher_name, setTeacher_name] = useState("");
  const [isActive, setIsActive] = useState("active");
  const [pricePerSession, setPricePerSession] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");

  // error message
  let [message, setErrorMessage] = useState("");

  const router = useRouter();
  const addCourseHandler: Function = (e: any, setSpinner: Function) => {
    e.preventDefault();

    const handlerFactory = new HandlerFactory("add-course");
    const addCourseHandler = handlerFactory.createHandler({
      title,
      teacher_name,
      description,
      isActive,
      //schoolId,
      pricePerSession,
      monthlyPrice,
      //moduleId,
      //nonAcademicTypeId,
    }) as handleAddCourse;

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
