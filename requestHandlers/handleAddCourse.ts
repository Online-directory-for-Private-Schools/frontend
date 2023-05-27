import { NextRouter } from "next/router";
// @ts-ignore
import cookieCutter from "cookie-cutter";
import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";

export interface IAddCourse {
    title: string;
    teacher_name: string;
    description: string;
    isActive: string;
    schoolId: string;
    pricePerSession: string;
    monthlyPrice: string;
    moduleId: string;
    nonAcademicTypeId: string
}
export class handleAddCourse extends RequestHandler {
    title: string;
    teacher_name: string;
    description: string;
    isActive: string;
    schoolId: string;
    pricePerSession: string;
    monthlyPrice: string;
    moduleId: string;
    nonAcademicTypeId: string;

    constructor({
        title,  
        teacher_name,
        description,
        isActive,
        schoolId,
        pricePerSession,
        monthlyPrice,
        moduleId,
        nonAcademicTypeId
    }:
        IAddCourse) {
        super();
        this.title = title;
        this.teacher_name = teacher_name;
        this.description = description;
        this.isActive = isActive;
        this.schoolId = schoolId;
        this.pricePerSession = pricePerSession;
        this.monthlyPrice = monthlyPrice;
        this.moduleId = moduleId;
        this.nonAcademicTypeId = nonAcademicTypeId;
    }

    execute({
        setErrorMessage,
        router,
    }: {
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
            nonAcademicTypeId: this.nonAcademicTypeId,
        };

        super.post("/course", body).then((res: any) => {
            if (!!res.error) {
                setErrorMessage(res.error.message);
            }
            else {
                setErrorMessage("");
                router.push("/school").catch((e: Error) => console.error(e));   
            }
        });
    }
}
