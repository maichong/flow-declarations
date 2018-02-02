// @flow

declare module 'alaska-page' {
  declare class PageService extends Alaska$Service {
  }

  declare export default PageService;
}
declare module 'alaska-page/models/Page' {
  declare export default class Page extends Alaska$Model<Page> {
  _id: string | number | Object | any;
  title: string;
  seoTitle: string;
  seoKeywords: string;
  seoDescription: string;
  template: string;
  createdAt: Date;
  content: string;
  preSave(): void;
  }
}
