// @flow

declare module 'alaska-sms' {
  declare class SmsService extends Alaska$Service {
  }

  declare export default SmsService;
}
declare module 'alaska-sms/models/Sms' {
  declare export default class Sms extends Alaska$Model {
  _id: string | Object | any;
  title: string;
  driver: Object;
  content: string;
  createdAt: Date;
  preSave(): void;
  }
}
