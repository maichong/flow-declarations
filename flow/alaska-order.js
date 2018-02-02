import type Goods from 'alaska-goods/models/Goods';
import type Sku from 'alaska-goods/models/Sku';
import type Order from 'alaska-order/models/Order';
import type OrderItem from 'alaska-order/models/OrderItem';
import type OrderLog from 'alaska-order/models/OrderLog';
import type User from 'alaska-user/models/User';

declare module 'alaska-order' {
  declare class OrderService extends Alaska$Service {
  }

  declare export default OrderService;
}


declare module 'alaska-order/models/Order' {
  declare export default class Order extends Alaska$Model<Order> {
  title: string;
  user: User;
  type: any;
  pic: Object;
  items: OrderItem[];
  address: Object;
  currency: string;
  shipping: number;
  total: number;
  pay: number;
  payed: number;
  payment: string;
  refund: number;
  refundReason: string;
  refundAmount: number;
  shipped: boolean;
  state: number;
  failure: string;
  createdAt: Date;
  paymentTimeout: Date;
  receiveTimeout: Date;
  refundTimeout: Date;
  userDeleted: boolean;
  adminDeleted: boolean;

  _logTotal: boolean;
  _logShipping: boolean;

  createLog(): OrderLog;
  canAppendItem(item: OrderItem): boolean;
  }
}

declare module 'alaska-order/models/OrderItem' {
  declare export default class OrderItem extends Alaska$Model<OrderItem> {
  pic: Object;
  title: string;
  order: Order;
  goods: Goods;
  sku: Sku;
  skuDesc: string;
  currency: string;
  price: number;
  discount: number;
  quantity: number;
  shipping: number;
  total: number;
  createdAt: Date;
  }
}

declare module 'alaska-order/models/OrderLog' {
  declare export default class OrderLog extends Alaska$Model<OrderLog> {
  title: string;
  order: Order;
  state: number;
  createdAt: Date;
  }
}
