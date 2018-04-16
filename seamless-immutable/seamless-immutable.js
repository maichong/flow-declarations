// TODO

declare module 'seamless-immutable' {
  declare interface MergeConfig {
    deep?: boolean,
    merger?: (a: any, b: any, config: any) => any
  }

  declare interface ReplaceConfig {
    deep?: boolean,
    merger?: (a: any, b: any, config: any) => any
  }

  declare interface AsMutableOptions {
    deep?: boolean,
  }

  declare interface ImmutableObjectMixin<T> {
    merge(collection: Array<any> | Object, config?: MergeConfig): ImmutableObject<T>;

    replace(object: Object, config?: ReplaceConfig): ImmutableObject<T>;

    set(key: string, value: any): ImmutableObject<T>;

    setIn(keyPath: Array<string>, value: any): ImmutableObject<T>;

    getIn(keyPath: Array<string>, defaultValue?: any): any;

    update(key: string, fn: Function): ImmutableObject<T>;

    updateIn(keyPath: Array<string>, fn: Function): ImmutableObject<T>;

    without(filter: (value: any, key: string) => boolean): ImmutableObject<T>;

    without(keys: Array<string>): ImmutableObject<T>;

    without(...keys: Array<string>): ImmutableObject<T>;

    asMutable(opts?: AsMutableOptions): T;
  }

  declare type ImmutableObject<T> = T & ImmutableObjectMixin<T>;
  
  declare interface ImmutableArrayMixin<T> {
    flatMap<R>(mapFunction: (item: T) => R[]): ImmutableArray<R>;

    asObject(fn: (item: T) => [string, any]): ImmutableObject<any>;

    asMutable(opts?: AsMutableOptions): Array<ImmutableObject<T>>;
  }

  declare type ImmutableArray<T> = Array<T> & ImmutableArrayMixin<T>;

  declare module.exports: {
    <T>(data: T): ImmutableObject<T>;
    <T>(data: T[]): ImmutableArray<T>;
    from<T>(value: T): ImmutableObject<T>,
    from<T>(value: T[]): ImmutableArray<T>,
    isImmutable: (x: any) => boolean,
    asMutable: (x: Object, opts?: AsMutableOptions) => Object,
    asMutable: (x: any[], opts?: AsMutableOptions) => any[],

    // Array
    flatMap<T>(array:T[], mapFunction: (item: T) => T[]): ImmutableArray<T>,
    asObject<T>(array:any[], fn: (item: T) => [string, any]): ImmutableObject<any>, 
    
    // Object
    merge<T>(collection: Array<any> | Object, config?: MergeConfig): ImmutableObject<T>,
    replace<T>(data: T, object: Object, config?: ReplaceConfig): ImmutableObject<T>,
    set<T>(data: T, key: string, value: any): ImmutableObject<T>,
    setIn<T>(data: T, keyPath: Array<string>, value: any): ImmutableObject<T>,
    getIn<T>(data: T, keyPath: Array<string>, defaultValue?: any): any,
    update<T>(data: T, key: string, fn: Function): ImmutableObject<T>;
    updateIn<T>(data: T, keyPath: Array<string>, fn: Function): ImmutableObject<T>,
    without<T>(data: T, filter: (value: any, key: string) => boolean): ImmutableObject<T>,
    without<T>(data: T, keys: Array<string>): ImmutableObject<T>,
    without<T>(data: T, ...keys: Array<string>): ImmutableObject<T>
  };
}
