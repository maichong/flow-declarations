declare module 'alaska-log' {
  declare class LogService extends Alaska$Service {
  }

  declare export default LogService;
}

declare module 'alaska-log/models/Log' {
  declare export default class Log extends Alaska$Model {
  title: string;
  type: string;
  level: string;
  method: string;
  time: number;
  status: string;
  length: number;
  details: Object;
  createdAt: Date;
  }
}

declare module 'alaska-log/sleds/Create' {
  declare export default class Create extends Alaska$Sled {
  }
}
