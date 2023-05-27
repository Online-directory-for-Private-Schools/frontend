import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
export interface ISearchCoursesRequest {
  token: string;
  title?: string;
  teacher_name?: string;
  description?: string;
  schoolId?: string;
  pricePerSessionStart?: string;
  pricePerSessionEnd?: string;
  monthlyPriceStart?: string;
  monthlyPriceEnd?: string;
  moduleId?: string;
  nonAcademicTypeId?: string;
  cityId?: string;
  provinceId?: string;
  countryId?: string;
}

export class HandleCourseSearch extends RequestHandler {
  token: string;
  title?: string;
  teacher_name?: string;
  description?: string;
  schoolId?: string;
  pricePerSessionStart?: string;
  pricePerSessionEnd?: string;
  monthlyPriceStart?: string;
  monthlyPriceEnd?: string;
  moduleId?: string;
  nonAcademicTypeId?: string;
  cityId?: string;
  provinceId?: string;
  countryId?: string;
  constructor({
    token: token,
    title: title,
    teacher_name: teacher_name,
    description: description,
    pricePerSessionStart: pricePerSessionStart,
    pricePerSessionEnd: pricePerSessionEnd,
    monthlyPriceStart: monthlyPriceStart,
    monthlyPriceEnd: monthlyPriceEnd,
    cityId: cityId,
    provinceId: provinceId,
    countryId: countryId,
  }: ISearchCoursesRequest) {
    super();
    this.token = token;
    this.title = title === undefined ? "" : title;
    this.description = description === undefined ? "" : description;
    this.pricePerSessionEnd =
      pricePerSessionEnd === undefined ? "" : pricePerSessionEnd;
    this.pricePerSessionStart =
      pricePerSessionStart === undefined ? "" : pricePerSessionStart;
    this.monthlyPriceEnd = monthlyPriceEnd === undefined ? "" : monthlyPriceEnd;
    this.monthlyPriceStart =
      monthlyPriceStart === undefined ? "" : monthlyPriceStart;
    this.cityId = cityId === undefined ? "" : cityId;
    this.provinceId = provinceId === undefined ? "" : provinceId;
    this.countryId = countryId === undefined ? "" : countryId;
  }
  async execute() {
    const res: any = await super.get(
      `/courses/`,
      `?title=${this.title}&description=${this.description}&pricePerSessionEnd=${this.pricePerSessionEnd}&pricePerSessionStart=${this.pricePerSessionStart}&monthlyPriceEnd=${this.monthlyPriceEnd}&monthlyPriceStart=${this.monthlyPriceStart}&cityId=${this.cityId}&provinceId=${this.provinceId}&countryId=${this.countryId}`,
      this.token
    );
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
