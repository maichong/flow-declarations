declare module 'alaska-address' {
  declare class AddressService extends Alaska$Service {
  }

  declare export default AddressService;
}
declare module 'alaska-address/model/Address' {
  declare export default class Address extends Alaska$Model {
  user: Object;
  name: string;
  tel: string;
  zip: string;
  geo: [number, number];
  country: string;
  province: string;
  city: string;
  district: string;
  street: string;
  building: string;
  detail: string;
  createdAt: Date;
  preSave(): void;
  }
}
