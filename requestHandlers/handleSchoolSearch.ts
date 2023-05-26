import { RequestHandler } from "@/requestHandlers/REST-Handler/RequestHandler";
export interface ISearchSchoolsRequest {
  name?: string;
  cityId?: string;
  countryId?: string;
  provinceId?: string;
  isHiring?: string;
  limit?: string;
  page?: string;
  token: string;
}

export class HandleSchoolSearch extends RequestHandler {
  token: string;
  name?: string;
  cityId?: string;
  countryId?: string;
  provinceId?: string;
  isHiring?: string;
  page?: string;
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
    (this.name = name),
      (this.cityId = cityId === undefined ? "" : cityId),
      (this.countryId = countryId === undefined ? "" : countryId),
      (this.provinceId = provinceId === undefined ? "" : provinceId),
      (this.isHiring = isHiring === undefined ? "" : isHiring),
      (this.page = page === undefined ? "" : page),
      (this.limit = limit === undefined ? "" : limit),
      (this.token = token);
  }
  async execute() {
    const res: any = await super.get(
      `/schools/?name=${this.name}&cityId=${this.cityId}&countryId=${this.countryId}&provinceId=${this.provinceId}&isHiring=&${this.isHiring}&page=${this.page}&limit=${this.limit}`,
      "",
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
