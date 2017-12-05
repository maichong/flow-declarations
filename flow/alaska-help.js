// @flow

declare module 'alaska-help' {
  declare class HelpService extends Alaska$Service {
  }

  declare export default HelpService;
}
declare module 'alaska-help/models/Help' {
  declare export default class Help extends Alaska$Model {
  title: string;
  parent: Object;
  relations: Object[];
  sort: number;
  activated: boolean;
  createdAt: Date;
  content: string;
  preSave(): void;
  }
}
