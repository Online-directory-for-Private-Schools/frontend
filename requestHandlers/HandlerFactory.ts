import { HandleLogin, ILogin } from "@/requestHandlers/handleLogin";
import { HandleSignUp, ISignUp } from "@/requestHandlers/handleSignUp";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
import {
  HandleSchoolRegister,
  ISchool,
} from "@/requestHandlers/handleSchoolRegiser";
import { HandleGetSchool } from "@/requestHandlers/handleGetSchool";
import { HandleGetUser } from "@/requestHandlers/HandleGetUser";
import {
  HandleSchoolSearch,
  ISearchSchoolsRequest,
} from "@/requestHandlers/handleSchoolSearch";
import {
  HandleCourseSearch,
  ISearchCoursesRequest,
} from "@/requestHandlers/handleCourseSearch";
import {
  HandleEditSchoolProfile,
  IEditSchoolRequest,
} from "@/requestHandlers/HandleEditSchoolProfile";
import { HandleChangeEmail, IChangeEmail } from "./handleChangeEmail";
import { IChangePassword, handleChangePassword } from "./handleChangePassowrd";
import { handleEditUserInfo, IEditUserInfo } from "./handleEditUserInfo";
import { HandleSendVerificationCode } from "./handleSendVerificationCode";
import { HandleVerifyEmail, IVerifyEmail } from "./handleVerifyEmail";

export class HandlerFactory {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  createHandler(
    body?: object
  ): HandleSchoolSearch | HandleLogin | HandleSignUp | RequestHandler | HandleChangeEmail| handleChangePassword | handleEditUserInfo {
    if (this.type === "login") {
      if (!body) throw Error("Body not provided");
      return new HandleLogin(<ILogin>body);
    } else if (this.type === "signup") {
      if (!body) throw Error("Body not provided");
      return new HandleSignUp(<ISignUp>body);
    } else if (this.type === "general") {
      return new RequestHandler();
    } else if (this.type === "school-register") {
      if (!body) throw Error("Body not provided");
      return new HandleSchoolRegister(<ISchool>body);
    } else if (this.type === "get-school") {
      if (!body) throw Error("Body not provided");
      return new HandleGetSchool(<{ id: string; token: string }>body);
    } else if (this.type === "change-email") {
      if (!body) throw Error("Body not provided");
      return new HandleChangeEmail(<IChangeEmail>body);
    } else if (this.type === "change-password") {
      if (!body) throw Error("Body not provided");
      return new handleChangePassword(<IChangePassword>body);
    } else if (this.type === "edit-user-info") {
      if (!body) throw Error("Body not provided");
      return new handleEditUserInfo(<IEditUserInfo>body);
    } else if (this.type === "get-user") {
      if (!body) throw Error("Body not provided");
      return new HandleGetUser(<{ token: string }>body);
    } else if (this.type === "search-school") {
      if (!body) throw Error("Body not provided");
      return new HandleSchoolSearch(<ISearchSchoolsRequest>body);
    } else if (this.type === "search-course") {
      if (!body) throw Error("Body not provided");
      return new HandleCourseSearch(<ISearchCoursesRequest>body);
    } else if (this.type === "edit-school") {
      if (!body) throw Error("Body not provided");
      return new HandleEditSchoolProfile(<IEditSchoolRequest>body);
    } else if (this.type === "verify-email") {
      if (!body) throw Error("Body not provided");
      return new HandleVerifyEmail(<IVerifyEmail>body);
    }
    else if (this.type === "send-email") {
      return new HandleSendVerificationCode();
    }
    else {
      throw Error("Undefined Type of Request Handler");
    }
  }
}
