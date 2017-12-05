import type User from 'alaska-user/models/User';
import Brand from 'alaska-goods/models/Brand';

declare module 'alaska-shop' {
  declare class ShopService extends Alaska$Service {
  }

  declare export default ShopService;
}

declare module 'alaska-shop/models/Shop' {
  declare export default class Shop extends Alaska$Model {
  title: string;
  logo: Object;
  user: User;
  brand: Brand;
  activated: boolean;
  createdAt: Date;
  desc: string;
  }
}
