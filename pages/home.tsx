import HomeScreenDashBoard from "@/components/Home/HomeScreenDashBoard";
import dynamic from "next/dynamic";
import React, {
  createContext,
  MutableRefObject,
  useRef,
  useState,
} from "react";
import { NextApiRequest, NextApiResponse } from "next";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { HandleGetUser } from "@/requestHandlers/HandleGetUser";
import { UserType } from "@/interfaces/UserType.enum";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
const Cookies = require("cookies");

const Navbar = dynamic(() => import("../components/landing/Navbar/Navbar"), {
  ssr: false,
});

export const CourseContext = createContext({
  course: false,
  setCourse: (value: boolean) => value,
});

export const SearchSubmitContext = createContext({
  submit: false,
  setSubmit: (value: boolean) => value,
  value: "",
});
export default function Home({
  isSchoolOwner,
  schoolId,
}: {
  isSchoolOwner: boolean;
  schoolId: number;
}) {
  let [course, setCourse] = useState(false);
  let [submit, setSubmit] = useState(false);
  const search = useRef({ value: "" }) as MutableRefObject<any>;
  return (
    <SearchSubmitContext.Provider
      value={{
        submit: submit,
        /* @ts-ignore */
        setSubmit: setSubmit,
        value: search.current.value,
      }}
    >
      {/* @ts-ignore */}
      <CourseContext.Provider value={{ course: course, setCourse: setCourse }}>
        <Navbar
          home
          loggedIn
          search={search}
          schoolOwner={isSchoolOwner}
          schoolId={schoolId}
        />
        <HomeScreenDashBoard course={course} search={search.current.value} />
      </CourseContext.Provider>
    </SearchSubmitContext.Provider>
  );
}

export async function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  const cookie = new Cookies(req, res);
  const token = cookie.get("token");

  if (token === "" || !token)
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  const handlerFactory = new HandlerFactory("get-user");
  const getUserHandler = handlerFactory.createHandler({
    token: token,
  }) as HandleGetUser;
  const resp = await getUserHandler.execute();

  if (resp.success) {
    const handlerFactory = new HandlerFactory("general");
    const getUserHandler = handlerFactory.createHandler() as RequestHandler;
    const response: any = await getUserHandler.get("/user/schools", "", token);

    if (response.data)
      return {
        props: {
          isSchoolOwner: resp.user.type === UserType.SCHOOL_OWNER,
          schoolId: response.data.schools[0].id,
        },
      };

    return {
      props: {
        isSchoolOwner: resp.user.type === UserType.SCHOOL_OWNER,
      },
    };
  }

  ookies.set("token", "");

  return {
    redirect: {
      permanent: false,
      destination: "/login",
    },
  };
}
