import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
export interface ISearchCoursesRequest {
  token: string;
  title?: string;
  teacher_name?: string;
  description?: string;
  schoolId?: number;
  pricePerSessionStart?: number;
  pricePerSessionEnd?: number;
  monthlyPriceStart?: number;
  monthlyPriceEnd?: number;
  moduleId?: number;
  nonAcademicTypeId?: number;
  cityId?: number;
  provinceId?: number;
  countryId?: number;
}

export class HandleCourseSearch extends RequestHandler {
  token: string;
  title?: string;
  teacher_name?: string;
  description?: string;
  schoolId?: number;
  pricePerSessionStart?: number;
  pricePerSessionEnd?: number;
  monthlyPriceStart?: number;
  monthlyPriceEnd?: number;
  moduleId?: number;
  nonAcademicTypeId?: number;
  cityId?: number;
  provinceId?: number;
  countryId?: number;
  constructor({
    token: token,
    title: title,
    teacher_name: teacher_name,
    description: description,
    schoolId: schoolId,
    pricePerSessionStart: pricePerSessionStart,
    pricePerSessionEnd: pricePerSessionEnd,
    monthlyPriceStart: monthlyPriceStart,
    monthlyPriceEnd: monthlyPriceEnd,
    moduleId: moduleId,
    nonAcademicTypeId: nonAcademicTypeId,
    cityId: cityId,
    provinceId: provinceId,
    countryId: countryId,
  }: ISearchCoursesRequest) {
    super();
    this.token = token;
    this.title = title;
    this.description = description;
    this.pricePerSessionEnd = pricePerSessionEnd;
    this.pricePerSessionStart = pricePerSessionStart;
    this.monthlyPriceEnd = monthlyPriceEnd;
    this.monthlyPriceStart = monthlyPriceStart;
    this.cityId = cityId;
    this.provinceId = provinceId;
    this.countryId = countryId;
  }
  async execute() {
    const res: any = await super.get("/courses/", "", this.token);
    // if an error occurred
    if (!!res.error)
      return {
        error: {
          message: res.error.message,
        },
      };
    else {
      return {
        res: res.data,
      };
    }
  }
}
