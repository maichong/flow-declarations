import type Email from 'alaska-email/models/Email';
import type EmailTask from 'alaska-email/models/EmailTask';
import type User from 'alaska-user/models/User';

declare module 'alaska-email' {
  declare class EmailService extends Alaska$Service {
    driversOptions: Object[];
    defaultDriver: Object;
    driversMap: Object;
    nextTask: ?EmailTask;
  }

  declare export default EmailService;
}


declare module 'alaska-email/models/Email' {
  declare export default class Email extends Alaska$Model {
  _id: string | number | Object | any;
  title: string;
  subject: string;
  driver: string;
  createdAt: Date;
  testTo: string;
  testData: Object;
  content: string;
  }
}

declare module 'alaska-email/models/EmailTask' {
  declare export default class EmailTask extends Alaska$Model {
  title: string;
  email: Email;
  state: number;
  interval: number;
  filters: Object;
  progress: number;
  total: number;
  lastUser: User;
  nextAt: Date;
  createdAt: Date;
  }
}
