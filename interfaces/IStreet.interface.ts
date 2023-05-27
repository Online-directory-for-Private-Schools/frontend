interface IStreet {
  id: number;
  city: ICity;
  name: String;
}
interface ICity {
  id: number;
  province: IProvince;
  name: string;
}
interface IProvince {
  id: number;
  country: ICountry;
  name: string;
}
interface ICountry {
  id: number;
  name: string;
}
