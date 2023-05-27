export interface ISchoolResp {
  id: number;
  name: string;
  bio: string;
  rating: number;
  isHiring: boolean;
  lng: string;
  lat: string;
  street: IStreet;
   //new
  website: string;
  phone_number:string;
  email: string;
}
