declare module 'alaska-commission' {
  declare class CommissionService extends Alaska$Service {
    constructor(options?: Alaska$Service$options, mAlaska?: Alaska$Alaska): void;
    postLoadConfig(): void;
  }

  declare module.exports: CommissionService;
}

declare module 'alaska-commission/models/Commission' {
  declare export default class Commission extends Alaska$Model<Commission> {
  title: string;
  user: Object;
  contributor: Object;
  order: Object;
  main: Object;
  level: number;
  currency: Object;
  amount: number;
  state: number;
  error: string;
  createdAt: Date;
  balancedAt: Date;
  }
}

declare module 'alaska-commission/sleds/Balance' {
  declare export default class Balance extends Alaska$Sled {
  }
}

declare module 'alaska-commission/sleds/Create' {
  declare export default class Create extends Alaska$Sled {
  }
}
