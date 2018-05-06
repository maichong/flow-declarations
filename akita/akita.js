
type akita$PaginateResult<T> = {
  total: number,
  page: number,
  limit: number,
  totalPage: number,
  previous: number,
  next: number,
  search: string,
  results: T[]
}

type akita$Inspect = { url: string } & akita$RequestInit;

declare class akita$Query<R> extends Promise<R> {
  arg(args: Object): this;
  arg(key: string, value: any): this;

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

  inspect(): akita$Inspect;
}

type akita$RequestInit = {
  method?: string,
  query?: Object,
  body?: any,
  headers?: Object,
  mode?: string,
  credentials?: string,
}

declare class akita$Response<R> extends Promise<R> {
  response(): Promise<Object>;
  stream(): Promise<stream$Readable>;
  ok(): Promise<boolean>;
  status(): Promise<number>;
  statusText(): Promise<string>;
  size(): Promise<number>;
  headers(): Promise<Headers>;
  buffer(): Promise<Buffer>;
  blob(): Promise<Blob>;
  text(): Promise<String>;
  json(): Promise<Object>;
}

declare class akita$HttpMixed {
  get(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  post(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  upload(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  put(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  patch(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  delete(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  head(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<null>;
  options(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<null>;
};

declare class akita$Model<T> extends akita$HttpMixed {
  static create(data: Object): akita$Query<T>;
  static update(data?: Object): akita$Query<T>;
  static update(id: string | number, data: Object): akita$Query<T>;
  static remove(conditions?: Object | string | number): akita$Query<void>;
  static count(conditions?: Object): akita$Query<number>;
  static paginate(conditions?: Object): akita$Query<akita$PaginateResult<T>>;
  static find(conditions?: Object): akita$Query<T[]>;
  static findById(conditions: number | string): akita$Query<T | null>;
  static findOne(conditions?: Object): akita$Query<T | null>;
  static findAll(conditions?: Object): akita$Query<T[]>;
  static request(path: string, init?: akita$RequestInit, query?: akita$Query<*> | null, inspect?: boolean): akita$Response<Object>;
  static get(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  static post(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  static upload(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  static put(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  static patch(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  static delete(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  static head(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<null>;
  static options(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<null>;
  constructor(data?: Object, params?: Object): void;
  request(path: string, init?: akita$RequestInit, inspect?: boolean): akita$Response<Object>;
  save(): Promise<void>;
  remove(): Promise<void>;
}

declare type akita$Client = akita$HttpMixed & {
  setOptions(options: Object): void;
  create(options: Object): akita$Client;
  resolve(key: string): akita$Client;
  request(path: string, init?: akita$RequestInit, query?: akita$Query<any>, inspect?: boolean): akita$Response<any>;
  latest?: akita$Inspect;
  (path: string): Class<akita$Model<Object>>;
}

declare module 'akita' {
  declare export var Model: typeof akita$Model;
  declare export default akita$Client
}
