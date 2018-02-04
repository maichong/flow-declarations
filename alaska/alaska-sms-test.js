declare module 'alaska-sms-test' {
  declare export default class SmsTestDriver {
  constructor(service: Alaska$Service): void;
  service: Alaska$Service;
  send(to: string, message: string): Promise<void>;
  }
}
