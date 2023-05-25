import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
export interface ISearchSchoolsRequest {
  name?: string;
  cityId?: number;
  countryId?: number;
  provinceId?: number;
  isHiring?: boolean;
  limit?: number;
  page?: number;
  token: string;
}

export class HandleSchoolSearch extends RequestHandler {
  token: string;
  name?: string;
  cityId?: number;
  countryId?: number;
  provinceId?: number;
  isHiring?: boolean;
  page?: number;
  limit?: number;
  constructor({
    name,
    cityId,
    countryId,
    provinceId,
    isHiring,
    page,
    limit,
    token,
  }: ISearchSchoolsRequest) {
    super();
    (this.name = name),
      (this.cityId = cityId),
      (this.countryId = countryId),
      (this.provinceId = provinceId),
      (this.isHiring = isHiring),
      (this.page = page),
      (this.limit = limit),
      (this.token = token);
  }
  async execute() {
    const res: any = await super.get("/schools/", "", this.token);
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
