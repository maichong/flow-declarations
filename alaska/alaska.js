import type { Stats } from 'fs';
import type Debugger from 'debug';
import type Router from 'koa-router';
import type Koa, { Context } from 'koa';
import type User from 'alaska-user/models/User';
import type { DependsQueryExpression } from 'check-depends';

/// Mongoose

declare class Mongoose$MongooseError extends Error {
}

declare class Mongoose$CastError extends Mongoose$MongooseError {
}

declare class Mongoose$ValidationError extends Mongoose$MongooseError {
  name: string;
  errors: {
    [path: string]: {
      message: string,
      name: string,
      path: string,
      type: string,
      value: any
    }
  }
}

declare class Mongoose$Aggregate {
  model(model: Class<Mongoose$Document>): this;
  append(ops: Object): this;
  project(arg: Object | string): this;
  group(arg: Object): this;
  match(arg: Object): this;
  skip(num: number): this;
  limit(num: number): this;
  near(parameters: Object): this;
  unwind(...fields: string[]): this;
  lookup(options: Object): this;
  sample(size: number): this;
  sort(arg: Object | string): this;
  read(pref: string, tags?: string[]): this;
  explain(callback: Function): Promise<any>;
  allowDiskUse(value: boolean): this;
  cursor(options: Object): this;
  addCursorFlag(flag: string, value: boolean): this;
  exec(callback: Function): Promise<any>;
  then(resolve?: Function, reject?: Function): Promise<any>;
}

/// end of Mongoose

declare type Indexed<T> = {
  [key: string]: T
}

declare type Alaska$style = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger';

declare type Alaska$UploadFile = {
  filename: string,
  mimeType: string,
  ext: string,
  size: number,
}

declare type Alaska$Context = Context & {
  sessionKey: string;
  sessionId: string;
  files: { [name: string]: Object };
  alaska: Alaska$Alaska;
  main: Alaska$Service;
  service: Alaska$Service;
  locale: string;
  _locale: string;
  session: { [key: string]: any };
  user?: User;
  checkAbility: (id: string) => Promise<void>;
  state: {
    c: Function;
    t: Function;
    env: string;
    [key: string]: any,
    record?: Alaska$Model<*>,
    paginateResults?: Alaska$PaginateResult<*>,
    listResults?: Alaska$Model<*>[]
  };
  panic: (message: string | number, code?: number) => void;
  error: (message: string | number, code?: number) => void;
  try: <T>(promise: Promise<T>) => Promise<T>;
  sendfile: (filePath: string, options: Object) => Promise<void>;
  t: ((message: string, locale?: string, values?: Object) => string) &
  ((message: string, values: Object) => string);
  show: (template: string, state?: Object) => Promise<string>;
  toJSON: () => Object;
};

declare type Alaska$Config$middleware = {
  id?: string,
  fn?: Function,
  sort?: number,
  options?: Object
};

declare type Alaska$Config$cache = {
  id: string;
  type: string;
  prefix?: boolean | string;
  maxAge?: number;
};

declare interface Alaska$Config$renderer {
  type: string;
  cache: boolean;
}

declare type Alaska$Config$session = {
  cookie?: {
    signed?: boolean;
    expires?: Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    key?: string;
    get?: (ctx: Alaska$Context, key: string, cookieOpts: Object) => string;
    set?: (ctx: Alaska$Context, key: string, sid: string, cookieOpts: Object) => void;
  };
  store?: Alaska$Config$cache;
  ignore?: RegExp | string | Function | Array<RegExp | string | Function>
};

declare type Alaska$Config$static = {
  prefix: string;
  root: string;
};

declare type Alaska$Config$services = {
  [id: string]: {
    dir?: string,
    optional?: boolean
  }
};

declare type Alaska$Config = {
  [name: string]: any;

  // project
  name?: string;
  port?: number;
  env?: string;
  middlewares: {
    [id: string]: Alaska$Config$middleware
  };
  session?: Alaska$Config$session;
  locales?: string[];
  defaultLocale?: string;
  localeQueryKey?: string;
  localeCookieKey?: string;

  // koa
  proxy?: boolean;
  subdomainOffset?: number;

  // service
  domain?: string;
  redirect?: string;
  prefix?: string | boolean;
  suffix?: string;
  defaultController?: string;
  defaultAction?: string;
  methods?: string[];
  statics?: Alaska$Config$static[];
  renderer?: Alaska$Config$renderer;
  services?: Alaska$Config$services;
  plugins?: {
    [key: string]: string | Class<Alaska$Plugin>
  };
  db?: false | string;
  dbPrefix?: false | string;
  cache?: Alaska$Config$cache | string;
};

declare type Alaska$filter = {
  value?: string | number | boolean;
  exact?: boolean;
  inverse?: boolean;
};

declare type Alaska$filters = {
  [path: string]: Alaska$filter | string | boolean | number;
  $or?: Alaska$filters[]
};

declare type Alaska$Service$options = {
  id: string,
  dir: string,
  configFile?: string
};

declare class Alaska$Plugin {
}

declare type Alaska$sledQueueItem = {
  id: string;
  key: string;
  notify: boolean;
  params: Object;
  sledName: string;
  result: ?any;
  error: ?string;
  timeout: number;
  createdAt: Date;
  expiredAt: Date;
}

declare class Alaska$Sled {
  static classOfSled: true;
  static service: Alaska$Service;
  static sledName: string;
  static key: string;
  static config: Object;
  static run(params?: Object): Promise<any>;
  static createSubscribeDriver(): Alaska$SubscribeDriver;
  static pre(fn: Function): void;
  static post(fn: Function): void;
  static read(timeout?: number): Promise<Alaska$Sled | null>;
  static createQueueDriver(): Alaska$QueueDriver;

  service: Alaska$Service;
  name: string;
  key: string;
  config: Object;
  constructor(params?: Object): void;
  run(): Promise<any>;
  createQueueDriver(): Alaska$QueueDriver;
  createSubscribeDriver(): Alaska$SubscribeDriver;
  send(timeout?: number, notify?: boolean): Promise<void>;
  wait(waitTimeout?: number, sledTimeout?: number): Promise<any>;
}

declare type Alaska$Data<M> = {
  [key: string]: any;
  pick(...fields: string[]): Alaska$Data<M>;
  omit(...fields: string[]): Alaska$Data<M>;
  getRecord(): M;
}

declare type Alaska$Model$relationships = {
  [key: string]: {
    key?: string;
    ref: Class<Alaska$Model<*>> | string;
    path: string,
    title?: string,
    private?: boolean,
    populations?: Alaska$Model$populations;
  };
};

declare type Alaska$Model$populations = {
  [path: string]: {
    path?: string;
    match?: Object;
    filters?: Object;
    model?: Class<Alaska$Model<*>>;
    //TODO check
    select?: string;
    scopes?: string;
    populations?: Alaska$Model$populations;
  }
};

declare type Alaska$Model$action = {
  key?: string,
  icon?: string,
  title?: string,
  tooltip?: string,
  style?: string,
  sled?: string,
  view?: string,
  editor?: boolean,
  list?: boolean,
  needRecords?: number,
  ability?: string | (data: Object) => string,
    super?: DependsQueryExpression,
    hidden ?: DependsQueryExpression,
    depends ?: DependsQueryExpression,
    disabled ?: DependsQueryExpression,
    confirm ?: string,
    pre ?: string,
    script ?: string,
    post ?: string
};

declare type Alaska$Model$actions = {
  [key: string]: Alaska$Model$action
};

declare interface Alaska$FieldGroup {
  title?: string,
  panel?: boolean,
  form?: boolean,
  style?: Alaska$style,
  wrapper?: string, // 自定义Wrapper占位符
  ability?: string | (data: Object) => string,
    super?: DependsQueryExpression,
    hidden ?: DependsQueryExpression,
    depends ?: DependsQueryExpression,
    disabled ?: DependsQueryExpression,
}

type UpdateResult = {
  nMatched: number,
  nUpserted: number,
  nModified: number,
  ok?: boolean
};

declare class Alaska$Model<+M > extends events$EventEmitter {

  [field: string]: any;

  // extends of Mongoose$Document
  schema: Mongoose$Schema<*>;
  isNew: boolean;
  id: string;
  _id: any;
  errors: Object[];

  constructor(obj ?: Object, fields ?: Object, skipId ?: boolean): void;
  init(doc: Object, opts ?: Object, fn ?: Function): this;
  update(doc: Object, options: Object, fn: Function): Alaska$Query<M>;
  set(path: string | Object, val: any, type ?: any, options ?: Object): this;
  get(path: string, type ?: any): any;
  markModified(path: string): void;
  unmarkModified(path: string): void;
  $ignore(path: string): void;
  modifiedPaths(): string[];
  isModified(paths ?: string | string[]): boolean;
  $isDefault(path: string): boolean;
  isDirectModified(path: string): boolean;
  isInit(path: string): boolean;
  isSelected(path: string): boolean;
  validate(options: Object, callback ?: Function): Promise<void>;
  validateSync(options: Object): Mongoose$MongooseError | void;
  invalidate(path: string, err: string | Error, val: any, kind ?: string): Mongoose$ValidationError;
  toObject(options ?: Object): Object;
  toJSON(options ?: Object): Object;
  inspect(options ?: Object): Object;
  toString(): string;
  equals(doc: Mongoose$Document): boolean;
  populate(path ?: Object | string, fn ?: Function): this;
  execPopulate(): Promise<Mongoose$Document>;
  populated(path: string, val ?: any, options ?: Object): string | void;
  depopulate(path: string): void;

  // Alaska$Model

  db: Mongoose$Connection;
  collection: Mongoose$Collection;

  static collection: Mongoose$Connection;
  static remove(conditions: Object, callback ?: Function): Alaska$Query<void>;
  static find(conditions ?: Object, projection ?: Object, options ?: Object, callback ?: Function): Alaska$Query<M[]>;
  static findById(id: Object | string | number, projection ?: Object, options ?: Object, callback ?: Function): Alaska$Query<M | null>;
  static findByIdAndUpdate(id: Object | string | number, update: Object, options ?: Object, callback ?: Function): Alaska$Query<M | null>;
  static findByIdAndRemove(id: Object | string | number, options ?: Object, callback ?: Function): Alaska$Query<M | null>;
  static findOne(conditions ?: Object, projection ?: Object, options ?: Object, callback ?: Function): Alaska$Query<M | null>;
  static findOneAndUpdate(conditions: Object, update: Object, options ?: Object, callback ?: Function): Alaska$Query<M | null>;
  static findOneAndRemove(conditions: Object, options ?: Object, callback ?: Function): Alaska$Query<M | null>;
  static update(conditions: Object, doc: Object, options ?: Object, callback ?: Function): Alaska$Query<UpdateResult>;
  static count(conditions ?: Object, callback ?: Function): Alaska$Query<number>;
  static distinct(field: string, conditions ?: Object, callback ?: Function): Alaska$Query<M>;
  static where(path: string | Object, val ?: any): Alaska$Query<M>;
  static $where(js: string | Function): Alaska$Query<M>;
  static create(doc: Object, fn ?: Function): Promise<M>;
  static create(doc: Object[], fn ?: Function): Promise<M[]>;
  static create(...doc: Array<Object | Function>): Promise<M>;
  static insertMany(doc: Object, fn ?: Function): Promise<M>;
  static insertMany(doc: Object[], fn ?: Function): Promise<M[]>;
  static insertMany(...doc: Array<Object | Function>): Promise<M[]>;
  static hydrate(obj: Object): this;
  static mapReduce(o: Object, callback ?: Function): Promise<M>;
  static geoNear(near: Object | number[], callback ?: Function): Promise<M>;
  static geoSearch(conditions: Object, options ?: Object, callback ?: Function): Promise<M>;
  static aggregate(options ?: Object, fn ?: Function): Mongoose$Aggregate | Promise<M>;
  static populate(docs: Mongoose$Document | Array < Mongoose$Document >, paths: Object, callback ?: Function): Promise<M>;

  constructor(obj: Object, fields ?: Object, skipId ?: boolean): void;
  save(options ?: Object, fn ?: Function): Promise<void>;
  increment(): this;
  remove(options ?: Object, fn ?: Function): Promise<void>;
  discriminator(name: string, schema: Mongoose$Schema<*>): Class<M>;
  ensureIndexes(options ?: Object, fn ?: Function): Promise<void>;

  // Alaska$Model

  _: { [path: string]: Function };
  data(scope ?: string): Alaska$Data<M>;

  static _pre: {
    [action: string]: Function[]
  };
  static _post: {
    [action: string]: Function[]
  };
  static _underscore: {
    [field: string]: {
      [name: string]: Function
    }
  };
  static __methods: {
    [field: string]: {
      [name: string]: Function
    }
  };
  static _virtuals: { [path: string]: boolean };

  static schemaOptions: Object;
  static registered: boolean;
  static classOfModel: true;
  static modelName: string;
  static id: string;
  static key: string;
  static path: string;
  static label: string;
  static icon: string;
  static hidden: boolean;
  static nocreate: boolean;
  static noupdate: boolean;
  static noremove: boolean;
  static noexport: boolean;
  static groups: {
    [key: string]: Alaska$FieldGroup
  };
  static service: Alaska$Service;
  static db: Mongoose$Connection;
  static MongooseModel: M;
  static schema: Mongoose$Schema<*>;
  static prefix: string;
  static preview: ? string;
  static quickEditorView: ? boolean;
  static autoSelect: boolean;
  static defaultScope: { [field: string]: boolean };
  static defaultSort ?: string;
  static defaultLimit ?: number;
  static titleField: string;
  static userField: string;
  static searchFields: string[] | string;
  static defaultColumns: string[] | string;
  static defaultFilters ?: Alaska$filters | (ctx: Alaska$Context) => Alaska$filters | Promise<Alaska$filters>;
  static scopes: {
    [scope: string]: string | { [field: string]: boolean }
  };
  static fields: {
    [path: string]: Alaska$Field$options
  };
  static _fields: {
    [path: string]: Alaska$Field
  };
  static virtuals: { };
  static api: {
    paginate ?: number,
      list ?: number,
      show ?: number,
      count ?: number,
      create ?: number,
      update ?: number,
      updateMulti ?: number,
      remove ?: number,
      removeMulti ?: number,
  };
  static actions: Alaska$Model$actions;

  static relationships: Alaska$Model$relationships;
  static populations: Alaska$Model$populations;

  static pre(action: string, fn: Function): void;
  static post(action: string, fn: Function): void;
  static register(): Promise<void>;
  static underscoreMethod(field: string, name: string, fn: Function): void;
  static createFilters(search: string, filters ?: Object | string): Alaska$filters;
  static createFiltersByContext(ctx: Alaska$Context, state ?: Object): Promise<Alaska$filters>;
  static paginate(conditions ?: Object): Alaska$PaginateQuery<this>;
  static paginateByContext(ctx: Alaska$Context, state ?: Object): Promise<Alaska$PaginateResult<M>>;
  static listByContext(ctx: Alaska$Context, state ?: Object): Promise<M[]>;
  static showByContext(ctx: Alaska$Context, state ?: Object): Promise<M | null>;
  static fromObject(data: Object): M;
  static fromObjectArray(array: Object[]): M[];
  static toObjectArray(array: M[]): Object[];
}

declare class Alaska$Query<+R > extends Promise < R > {
  toConstructor(): Alaska$Query<R>;
  distinct(field?: string, conditions?: Object, callback?: Function): Alaska$Query<R>;
  find(conditions?: Object, callback?: Function): Alaska$Query<R[]>;
  findOne(conditions?: Object, projection?: Object, options?: Object, fn?: Function): Alaska$Query<R>;
  findOneAndUpdate(conditions?: Object, doc?: Object, options?: Object, callback?: Function): Alaska$Query<R>;
  findOneAndRemove(conditions?: Object, options?: Object, callback?: Function): Alaska$Query<R>;
  remove(conditions?: Object, callback?: Function): Alaska$Query<void>;
  count(conditions?: Object, callback?: Function): Alaska$Query<number>;
  $where(js: string | Function): this;
  where(path?: Object | string, val?: any): this;
  equals(val: any): this;
  or(conditions: Object[]): this;
  nor(conditions: Object[]): this;
  and(conditions: Object[]): this;
  gt(path: string, val: any): this;
  gt(val: any): this;
  gte(path: string, val: any): this;
  gte(val: any): this;
  lt(path: string, val: any): this;
  lt(val: any): this;
  lte(path: string, val: any): this;
  lte(val: any): this;
  ne(path: string, val: any): this;
  ne(val: any): this;
  in(path: string, val: any[]): this;
  in(val: any[]): this;
  nin(path: string, val: any[]): this;
  nin(val: any[]): this;
  all(path: string, val: any[]): this;
  all(val: any[]): this;
  size(path: string, val: number): this;
  size(val: number): this;
  regex(path: string, val: RegExp): this;
  regex(val: RegExp): this;
  maxDistance(path: string, val: number): this;
  maxDistance(val: number): this;
  mod(path: string, val: number[]): this;
  mod(val: number[]): this;
  exists(path: string, val: boolean): this;
  exists(val: boolean): this;
  elemMatch(path: string | Object | Function, criteria: Object | Function): this;
  within(): this;
  within(criteria: Object): this;
  within(...points: Array<[number, number]>): this;
  slice(path: string, val: number[] | number): this;
  slice(val: number[] | number): this;
  limit(val: number): this;
  skip(val: number): this;
  maxScan(val: number): this;
  batchSize(val: number): this;
  comment(val: string): this;
  snapshot(): this;
  hint(val: Object): this;
  select(arg: Object | string): this;
  read(pref: string, tags: string[]): this;
  setOptions(options: Object | Alaska$Query<R>): this;
  getQuery(): Object;
  getUpdate(): Object;
  lean(bool?: boolean): this;
  merge(source?: Object | Alaska$Query<R>): this;
  sort(arg: Object | string): this;
  update(conditions?: Object, doc?: Object, options?: Object, callback?: Function): this;
  exec(op?: string | Function, callback?: Function): Promise<R>;
  //then(resolve?: Function, reject?: Function): Promise<any>;
  //catch(reject?: Function): Promise<any>;
  populate(path: string | Object, select?: Object | string, model?: Class<Alaska$Model<*>>, match?: Object, options?: Object): this;
  cast(model: Alaska$Model<*>, obj?: Object): Object;
  stream(options?: Object): Mongoose$QueryStream;
  cursor(options?: Object): Mongoose$QueryCursor<R>;
  tailable(bool?: boolean, options?: Object): this;
  intersects(arg?: Object): this;
  geometry(object: Object): this;
  near(path: string, val: Object): this;
  near(val: Object): this;
  polygon(path: string, ...coordinatePairs: Array<[number, number]>): this;
  polygon(...coordinatePairs: Array<[number, number]>): this;
  box(val: Object | Array<[number, number]>, upperRight?: Array<[number, number]>): this;
  circle(path: string, val: Object): this;
  circle(val: Object): this;
  selected(): boolean;
  selectedInclusively(): boolean;
  selectedExclusively(): boolean;
}

declare class Alaska$PaginateQuery<+R > extends Alaska$Query < R > {
  search(keyword: string): this;
  page(page: number): this;
}

declare type Alaska$PaginateResult<M> = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
  next: number;
  previous: number;
  results: M[]
};

declare class Alaska$Field {
  static classOfField: true;
  static plain: any;
  static dbOptions?: string[];
  static viewOptions?: Array<string | (options: Object, field: Alaska$Field) => void>;
  static defaultOptions ?: Indexed<any>;
[path: string]: any;

// Mongoose
get: ? Function;
set: ? Function;
  default: ?any;
index: ? boolean;
unique: ? boolean;
sparse: ? boolean;
text: ? boolean;
required: ? boolean;
select: ? boolean;
match ?: RegExp;

// Alaska
type: Class<Alaska$Field>;
defaultValue ?: any;
dataType: Function;
label: string;
path: string;
ref ?: Class<Alaska$Model<*>>;
group: ? string;
multi: boolean;
horizontal: ? boolean;
nolabel: ? boolean;
ability: ? string | (data: Object) => string;
private: boolean;
super: ?DependsQueryExpression;
hidden: ? DependsQueryExpression;
depends: ? DependsQueryExpression;
disabled: ? DependsQueryExpression;
fixed: ? boolean;
help: ? string;
cell: ? string | boolean;
view: ? string;
filter: ? string | boolean;
after: ? string;
_model: Class<Alaska$Model<*>>;
_schema: Mongoose$Schema<*>;
_options: Alaska$Field$options;

viewOptions(): { label: string; plain: Object | string };
init(): void;
underscoreMethod(name: string, fn: Function): void;
createFilter(filter: Object, filters: Object): any;
}

declare type Alaska$Field$options = {
  // Mongoose
  get?: Function;
  set?: Function;
  default?: any | Promise<any>;
  index?: boolean;
  unique?: boolean;
  sparse?: boolean;
  text?: boolean;
  required?: boolean;
  select?: boolean;
  match?: boolean;

  // Alaska
  options?: Alaska$SelectField$option[] | Promise<Alaska$SelectField$option[]> | Promise<Alaska$Currency[]>;
  type?: Class<Alaska$Field> | string | Function | void;
  defaultValue?: any;
  ref?: Class<Alaska$Model<*>> | string | [string];
  label?: string;
  path?: string;
  group?: string;
  multi?: boolean;
  horizontal?: boolean;
  nolabel?: boolean;
  ability?: string | (data: Object) => string;
private ?: boolean;
super?: DependsQueryExpression;
hidden ?: DependsQueryExpression;
depends ?: DependsQueryExpression;
disabled ?: DependsQueryExpression;
fixed ?: boolean;
help ?: string;
cell ?: string | boolean;
view ?: string;
filter ?: string | boolean;
after ?: string;
};

declare interface Alaska$SelectField$option {
  +value: string | number | boolean;
+label: string;
+style ?: Alaska$style;
+depends ?: DependsQueryExpression;
}

declare interface Alaska$Currency {
  +value: string,
  +label: string,
    +unit: string,
      +precision ?: number,
      +default?: boolean
}

declare class Alaska$Service {
  static classOfService: true;
  id: string;
  dir: string;
  configFile: string;
  version: string;
  alaska: Alaska$Alaska;
  debug: Debugger;
  options: Alaska$Service$options;
  router: Router;
  cache: Alaska$CacheDriver;
  renderer: Alaska$Renderer;
  db: Mongoose$Connection;
  plugins: { [key: string]: Alaska$Plugin };
  sleds: { [name: string]: Class<Alaska$Sled> };
  models: { [name: string]: Class<Alaska$Model<*>> };
  locales: { [locale: string]: Object };
  templatesDirs: string[];

  constructor(options?: Alaska$Service$options): void;
  createDriver(options: Object): Alaska$Driver;
  freeDriver(driver: Alaska$Driver): void;
  pre(action: string, fn: Function): void;
  post(action: string, fn: Function): void;
  panic: (message: string | number, code?: number) => void;
  error: (message: string | number, code?: number) => void;
  try: <T>(promise: Promise<T>) => Promise<T>;
  adminSettings(ctx: Alaska$Context, user: User, settings: Object): Promise<void>;
  applyConfig(config: Alaska$Config): void;
  getConfig(key: string, defaultValue?: any, mainAsDefault?: boolean): any;
  registerModel(Model: Class<Alaska$Model<*>>): Promise<Class<Alaska$Model<*>>>;
  hasModel(modelName: string): boolean;
  getModel(modelName: string): Class<Alaska$Model<*>>;
  hasSled(sledName: string): boolean;
  getSled(sledName: string): Class<Alaska$Sled>;
  run(sledName: string, params?: Object): Promise<any>;
  t(message: string, locale?: string, values?: Object, formats?: Object): string;
  toJSON(): Object;
  loadModels(): void;
}

declare class Alaska$Alaska {
  modules: Object,
  db: Mongoose$Connection;
  main: Alaska$Service;
  services: { [id: string]: Alaska$Service };
  app: Koa;
  registerService(service: Alaska$Service): void;
  hasService(id: string): boolean;
  getService(id: string): Alaska$Service;
  getConfig(key: string, defaultValue: any): any;
  toJSON(): Object;
  post(action: string, fn: Function): void;
  panic: (message: string | number, code?: number) => void;
  error: (message: string | number, code?: number) => void;
  try: <T>(promise: Promise<T>) => Promise<T>;
}

declare interface Alaska$Driver$config {
  type: string | Alaska$Driver;
  idle?: boolean;
}

declare class Alaska$Driver {
  static classOfDriver: true;
  instanceOfDriver: boolean;
  service: Alaska$Service;
  options: Object;
  idle: number;
  idleId: string;

  constructor(service: Alaska$Service, options: Alaska$Driver$config): void;
  driver(): any;
  free(): void;
  destroy(): void;
  onFree(): void;
  onDestroy(): void;
}

declare class Alaska$CacheDriver extends Alaska$Driver {
  static classOfCacheDriver: true;
  instanceOfCacheDriver: true;

  constructor(service: Alaska$Service, options: Alaska$Driver$config): void;
  get(key: string): Promise<any>;
  set(key: string, value: any, lifetime?: number): Promise<void>;
  del(key: string): Promise<void>;
  has(key: string): Promise<boolean>;
  inc(key: string): Promise<number>;
  dec(key: string): Promise<number>;
  size(): Promise<number>;
  prune(): Promise<void>;
  flush(): Promise<void>;
}

declare class Alaska$QueueDriver extends Alaska$Driver {
  static classOfQueueDriver: true;
  instanceOfQueueDriver: true;
  key: string;

  constructor(service: Alaska$Service, options: Alaska$Driver$config): void;
  push(item: any): Promise<void>;
  pop(timeout?: number): Promise<any>;
}

declare class Alaska$SubscribeDriver extends Alaska$Driver {
  static classOfSubscribeDriver: true;
  instanceOfSubscribeDriver: true;
  channel: string;

  constructor(service: Alaska$Service, options: Alaska$Driver$config): void;
  publish(message: Object): Promise<void>;
  subscribe(): Promise<Object>;
  read(timeout: ?number): Promise<Object | null>;
  once(timeout: ?number): Promise<Object | null>;
  cancel(): Promise<void>;
}

declare type Alaska$emailMessage = {
  from?: string;
  to?: string;
  cc?: string;
  bcc?: string;
  subject?: string;
  text?: string;
  html?: string;
  attachments?: Object[];
  replyTo?: string;
  encoding?: string;
  messageId?: string;
  headers?: Object;
  [key: string]: any
};

declare class Alaska$EmailDriver extends Alaska$Driver {
  static classOfEmailDriver: true;
  instanceOfEmailDriver: true;

  constructor(service: Alaska$Service, options: Alaska$Driver$config): void;
  send(data: Alaska$emailMessage): Promise<Object>;
}

declare class Alaska$SmsDriver extends Alaska$Driver {
  static classOfSmsDriver: true;
  instanceOfSmsDriver: true;

  constructor(service: Alaska$Service, options: Alaska$Driver$config): void;
  send(to: string, message: string): Promise<Object>;
}

declare class Alaska$Renderer {
  static classOfRenderer: true;
  instanceOfRenderer: true;
  service: Alaska$Service;
  options: Alaska$Config$renderer;

  constructor(service: Alaska$Service, options: Alaska$Config$renderer): void;
  renderFile(pathName: string, locals: Object): Promise<string>;
  render(template: string, locals: Object): string;
  getFileMap(): { [file: string]: string };
}

declare class Alaska$NormalError extends Error {
  constructor(message: string | number, code?: number): void;
}

declare type Alaska$utils = {
  statAsync(path: string): Promise<Stats>,
  isFile(path: string): boolean,
  isDirectory(path: string): boolean,
  readJson(path: string): Object,
  isHidden(path: string): boolean,
  resolved(): Promise<null>,
  noop(): void,
  bindMethods(obj: Object, scope: Object): Object,
  escapeRegExp(str: string): string,
  isObjectId(id: string): boolean,
  nameToKey(name: string): string,
  deepClone(target: Object, patch: Object): Object,
  merge(target: Object, patch: Object): Object,
  parseAcceptLanguage(header: string): string[],
}

declare module alaska {
  declare export var NormalError: Class<Alaska$NormalError>;
  declare export var Alaska: Class<Alaska$Alaska>;
  declare export var Service: Class<Alaska$Service>;
  declare export var Model: typeof Alaska$Model;
  declare export var Sled: Class<Alaska$Sled>;
  declare export var Field: Class<Alaska$Field>;
  declare export var Renderer: Class<Alaska$Renderer>;
  declare export var Driver: Class<Alaska$Driver>;
  declare export var utils: Alaska$utils;
  declare export var CLOSED: 0;
  declare export var PUBLIC: 1;
  declare export var AUTHENTICATED: 2;
  declare export var OWNER: 3;
  declare export default Alaska$Alaska;
}

declare module 'alaska/utils' {
  declare module.exports: Alaska$utils
}
