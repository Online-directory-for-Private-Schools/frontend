import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
export interface ISearchSchoolsRequest {
  page: string;
  name?: string;
  cityId?: string;
  countryId?: string;
  provinceId?: string;
  isHiring?: string;
  limit?: string;
  token: string;
}

export class HandleSchoolSearch extends RequestHandler {
  token: string;
  page: string;
  name?: string;
  cityId?: string;
  countryId?: string;
  provinceId?: string;
  isHiring?: string;
  limit?: string;
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
    this.name = name;
    this.cityId = cityId;
    this.countryId = countryId;
    this.provinceId = provinceId;
    this.isHiring = isHiring;
    this.page = page;
    this.limit = limit;
    this.token = token;
  }
  async execute() {
    const res: any = await super.get(
      `/schools/`,
      `?${this.name === undefined ? "" : `name=${this.name}`}${
        this.cityId === undefined ? "" : `&cityId=${this.cityId}`
      }${this.countryId === undefined ? "" : `&countryId=${this.countryId}`}${
        this.provinceId === undefined ? "" : `&provinceId=${this.provinceId}`
      }${this.isHiring === undefined ? "" : `&isHiring=${this.isHiring}`}${
        this.page === undefined ? "" : `&page=${this.page}`
      }${this.limit === undefined ? "" : `&limit=${this.limit}`}`,
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
