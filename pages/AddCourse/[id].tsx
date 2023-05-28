import AddCourse from "@/components/School/AddCourse";
import { NextApiRequest, NextApiResponse } from "next";
import { HandlerFactory } from "@/requestHandlers/HandlerFactory";
import { HandleGetUser } from "@/requestHandlers/HandleGetUser";
import { UserType } from "@/interfaces/UserType.enum";
import { useRouter } from "next/router";

const Cookies = require("cookies");

export default function Add_course() {
    const router = useRouter();
    const {id} = router.query;
  return (
    <>
      <AddCourse id={Number(id)}/>
    </>
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

  // Check if user already logged in
  if (token === "" || !token)
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };

  // Check validity of token
  const handlerFactory = new HandlerFactory("get-user");
  const getUserHandler = handlerFactory.createHandler({
    token: token,
  }) as HandleGetUser;

  const resp = await getUserHandler.execute();
  if (resp.success)
    if (resp.user.type === UserType.SCHOOL_OWNER)
      return {
        props: {},
      };
    else
      return {
        redirect: {
          permanent: false,
          destination: "/home",
        },
      };

  cookie.set("token", "");

  return {
    redirect: {
      permanent: false,
      destination: "/login",
    },
  };
}
