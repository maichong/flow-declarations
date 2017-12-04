// TODO

declare module 'seamless-immutable' {
  declare type MergeConfig = {
    deep?: boolean,
    merger?: (a: any, b: any, config: any) => any
  }

  declare type AsMutableOptions = {
    deep?: boolean,
  }

  declare type Immutable<T: Object | Array<*>> = T & {
    // Array methods
    flatMap(fn: Function): Array<any>;
    asObject(fn: Function): Object;
    asMutable(opts?: AsMutableOptions): Array<any>;
    // Object methods
    merge(collection: Array<any> | Object, config?: MergeConfig): Object;
    set(key: string, value: any): Object;
    setIn(keyPath: Array<string>, value: any): Object;
    update(key: string, fn: Function): Object;
    updateIn(keyPath: Array<string>, fn: Function): Object;
    without(fn: Function): Object;
    without(keys: Array<string>): Object;
    without(...keys: Array<string>): Object;
    asMutable(opts?: AsMutableOptions): Array<any> | Object;
  };

  declare function from<T: Object | Array<*>>(spec: T): Immutable<T>;

  declare type Default = {
    (data: Object): Immutable<Object>;
    (data: Array<*>): Immutable<Array<*>>;
    from: typeof from;
    isImmutable: (x: any) => boolean,
    asMutable: (x: Object, opts?: AsMutableOptions) => Object,
    asMutable: (x: Object[], opts?: AsMutableOptions) => Object[],
  };

  declare var exports: Default;
}
