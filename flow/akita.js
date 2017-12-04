// for akita 0.3.7

type Akita$PaginateResult = {
  total: number,
  page: number,
  limit: number,
  totalPage: number,
  previous: number,
  next: number,
  search: string,
  results: Object[]
}

declare class Akita$Query<+R> extends Promise<R> {
  create(data: Object): Akita$Query<Object>;
  update(data?: Object): Akita$Query<Object>;
  update(id: string | number, data: Object): Akita$Query<Object>;
  remove(conditions?: Object | string | number): Akita$Query<void>;
  count(conditions?: Object): Akita$Query<number>;
  find(conditions?: Object): Akita$Query<Akita$PaginateResult>;
  findById(conditions: number | string): Akita$Query<Object | null>;
  findOne(conditions?: Object): Akita$Query<Object | null>;
  findAll(conditions?: Object): Akita$Query<Object[]>;

  param(key: Object): this;
  param(key: string, value: any): this;

  search(keyword: string): this;

  where(conditions: Object | string): this;
  where(conditions: string, value: any): this;

  eq(value: any): this;
  equals(value: any): this;

  // less than
  lt(value: any): this;
  lte(value: any): this;

  // greater than
  gt(value: any): this;
  gte(value: any): this;


  limit(size: number): this;
  page(size: number): this;
  sort(sortBy: string): this;

  inspect(): Object;
}

type Akita$RequestInit = {
  method?: string,
  params?: Object,
  body?: any,
  headers?: Object,
  mode?: string,
  credentials?: string,
}

declare class Akita$Result<+R> extends Promise<R> {
  response(): Promise<Object>;
  buffer(): Promise<Buffer>;
  text(): Promise<String>;
  json(): Promise<Object>;
}

type Akita$Client = {
  setOptions(options: Object): void;
  create(options: Object): Akita$Client;
  resolve(key: string): Akita$Client;
  request(path: string, init?: Akita$RequestInit, query?: Akita$Query<any>, inspect?: boolean): Akita$Result<any>;
  get(path: string, init?: Akita$RequestInit): Akita$Result<Object>;
  post(path: string, init?: Akita$RequestInit): Akita$Result<Object>;
  upload(path: string, init?: Akita$RequestInit): Akita$Result<Object>;
  put(path: string, init?: Akita$RequestInit): Akita$Result<Object>;
  patch(path: string, init?: Akita$RequestInit): Akita$Result<Object>;
  delete(path: string, init?: Akita$RequestInit): Akita$Result<Object>;
  head(path: string, init?: Akita$RequestInit): Akita$Result<null>;
  options(path: string, init?: Akita$RequestInit): Akita$Result<null>;
  trace(path: string, init?: Akita$RequestInit): Akita$Result<null>;
  connect(path: string, init?: Akita$RequestInit): Akita$Result<null>;

  (path: string): Akita$Query<any>;
}

declare module 'akita' {
  declare var exports: Akita$Client;
}

declare module 'akita-node' {
  declare var exports: Akita$Client;
}
