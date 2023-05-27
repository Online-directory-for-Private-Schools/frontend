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
    const res: any = await super.get(
      `/courses/`,
      `?${this.title === undefined ? "" : `title=${this.title}`}${
        this.description === undefined ? "" : `&description=${this.description}`
      }${
        this.pricePerSessionEnd === undefined
          ? ""
          : `&pricePerSessionEnd=${this.pricePerSessionEnd}`
      }${
        this.pricePerSessionStart === undefined
          ? ""
          : `&pricePerSessionStart=${this.pricePerSessionStart}`
      }${
        this.monthlyPriceEnd === undefined
          ? ""
          : `&monthlyPriceEnd=${this.monthlyPriceEnd}`
      }${
        this.monthlyPriceStart === undefined
          ? ""
          : `&monthlyPriceStart=${this.monthlyPriceStart}`
      }${this.cityId === undefined ? "" : `&cityId=${this.cityId}`}${
        this.provinceId === undefined
          ? ""
          : `&provinceId=${(this, this.provinceId)}`
      }${this.countryId === undefined ? "" : `&countryId=${this.countryId}`}`,
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
