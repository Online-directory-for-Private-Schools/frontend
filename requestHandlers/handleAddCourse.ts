import { NextRouter } from "next/router";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";

export interface IAddCourse {
  title: string;
  teacher_name: string;
  description: string;
  isActive: string;
  schoolId: number;
  pricePerSession: string;
  monthlyPrice: string;
  moduleId: number;
  
}
export class handleAddCourse extends RequestHandler {
  title: string;
  teacher_name: string;
  description: string;
  isActive: boolean;
  schoolId: number;
  pricePerSession: string;
  monthlyPrice: string;
  moduleId: number;
  

  constructor({
    title,
    teacher_name,
    description,
    isActive,
    schoolId,
    pricePerSession,
    monthlyPrice,
    moduleId,
    
  }: IAddCourse) {
    super();
    this.title = title;
    this.teacher_name = teacher_name;
    this.description = description;
    this.isActive = isActive === "active";
    this.schoolId = schoolId;
    this.pricePerSession = pricePerSession;
    this.monthlyPrice = monthlyPrice;
    this.moduleId = moduleId;
    
  }

  execute({
    setErrorMessage,
    setSpinner,
    router,
  }: {
    setSpinner: Function;
    setErrorMessage: Function;
    router: NextRouter;
  }) {
    const body = {
      title: this.title,
      teacher_name: this.teacher_name,
      description: this.description,
      isActive: this.isActive,
      schoolId: this.schoolId,
      pricePerSession: this.pricePerSession,
      monthlyPrice: this.monthlyPrice,
      moduleId: this.moduleId,
    };
    console.log(body);
    super.post("/courses", body).then((res: any) => {
      if (!!res.error) {
        setSpinner(false);
        setErrorMessage(res.error.message);
      } else {
        setSpinner(false);
        setErrorMessage("");
        router.push(`/SchoolProfile/${this.schoolId}`).catch((e: Error) => console.error(e));
      }
    });
  }
}
