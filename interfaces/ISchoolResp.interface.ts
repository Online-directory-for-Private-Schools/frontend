export interface ISchoolResp {
  id: number;
  name: string;
  bio: string;
  rating: number;
  isHiring: boolean;
  lng: string;
  lat: string;
  street: IStreet;
}
