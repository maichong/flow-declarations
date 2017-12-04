// TODO

declare module 'seamless-immutable' {
  declare interface MergeConfig {
    deep?: boolean,
    merger?: (a: any, b: any, config: any) => any
  }

  declare interface AsMutableOptions {
    deep?: boolean,
  }

  declare interface ImmutableObjectMixin<T> {
    merge(collection: Array<any> | Object, config?: MergeConfig): ImmutableObject<T>;

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

  declare interface ImmutableArrayMixin<T> {
    flatMap<TTarget>(mapFunction: (item: T) => TTarget[]): ImmutableArray<TTarget>;

    asObject(fn: (item: T) => [string, any]): ImmutableObject<any>;

    asMutable(opts?: AsMutableOptions): Array<T>;
  }

  declare type ImmutableObject<T> = T & ImmutableObjectMixin<T>;
  declare type ImmutableArray<T> = T[] & ImmutableArrayMixin<T>;

  declare var exports: {
    <T>(data: T): ImmutableObject<T>;
    <T>(data: T[]): ImmutableArray<T>;
    from<T>(value: T): ImmutableObject<T>,
    from<T>(value: T[]): ImmutableArray<T>,
    isImmutable: (x: any) => boolean,
    asMutable: (x: Object, opts?: AsMutableOptions) => Object,
    asMutable: (x: any[], opts?: AsMutableOptions) => any[],
  };
}
