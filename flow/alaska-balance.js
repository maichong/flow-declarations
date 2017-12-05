declare module 'alaska-balance' {
  declare class BalanceService extends Alaska$Service {
    currencies: Alaska$Currency[];
    currenciesMap: Object;
    defaultCurrency: Alaska$Currency;
    getCurrenciesAsync(): Promise<Alaska$Currency[]>;
    getDefaultCurrencyAsync(): Promise<Alaska$Currency>;
  }

  declare export default BalanceService;
}

declare module 'alaska-balance/models/Deposit' {
  declare export default class Deposit extends Alaska$Model {
  title: string;
  user: User;
  currency: string;
  amount: number;
  balance: number;
  createdAt: Date;
  expiredAt: Date;
  }
}

import type Deposit from 'alaska-balance/models/Deposit';

declare module 'alaska-balance/models/Income' {
  declare export default class Income extends Alaska$Model {
  title: string;
  user: User;
  deposit: Deposit;
  type: string;
  currency: string;
  amount: number;
  balance: number;
  createdAt: Date;
  }
}

declare module 'alaska-balance/models/Withdraw' {
  declare export default class Withdraw extends Alaska$Model {
  title: string;
  user: User;
  currency: string;
  amount: number;
  note: string;
  createdAt: Date;
  state: number;
  reason: string;
  }
}
