import type User from 'alaska-user/models/User';

declare module 'alaska-payment' {
  declare class PaymentService extends Alaska$Service {
    static payments: Object;
    static run(name: string, params?: Object): Promise<any>;
    payments: Object;
  }

  declare export default PaymentService;
  declare export var PaymentService: Class<PaymentService>;
}

declare module 'alaska-payment/models/Payment' {
  declare export default class Payment extends Alaska$Model {
  title: string;
  user: User;
  amount: number;
  type: Object;
  params: Object;
  state: number;
  failure: string;
  createdAt: Date;
  currency: string;
  preSave(): void;

  alipay_trade_no: string;
  alipay_buyer_email: string;
  }
}

