import type User from 'alaska-user/models/User';

declare module 'alaska-banner' {
  declare class BannerService extends Alaska$Service {
  }

  declare export default BannerService;
}
declare module 'alaska-banner/models/Banner' {
  declare export default class Banner extends Alaska$Model<Banner> {
  title: string;
  pic: Object;
  position: string;
  action: string;
  url: string;
  sort: number;
  clicks: number;
  activated: boolean;
  startAt: Date;
  endAt: Date;
  createdAt: Date;
  preSave(): void;
  isValid(): boolean;
  }
}
