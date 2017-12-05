declare module 'alaska-link' {
  declare class LinkService extends Alaska$Service {

  }

  declare export default LinkService;
}
declare module 'alaska-link/models/Link' {
  declare export default class Link extends Alaska$Model {
  title: string;
  url: string;
  pic: Object;
  activated: boolean;
  sort: number;
  createdAt: Date;
  }
}
