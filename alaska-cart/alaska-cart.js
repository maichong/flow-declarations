import Goods from 'alaska-goods/models/Goods';
import Sku from 'alaska-goods/models/Sku';
import type User from 'alaska-user/models/User';

declare module 'alaska-cart' {
  declare class CartService extends Alaska$Service {
  }

  declare export default CartService;
}

declare module 'alaska-cart/models/CartItem' {
  declare export default class CartItem extends Alaska$Model<CartItem> {
  pic: Object;
  title: string;
  goods: Goods;
  sku: Sku;
  skuDesc: string;
  user: User;
  currency: string;
  price: number;
  discount: number;
  quantity: number;
  createdAt: Date;
  }
}
