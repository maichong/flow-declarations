declare module 'lru-cache' {
  declare interface Options {
    max?: number,
    length?: number,
    dispose?: Function,
    maxAge?: number,
    stale?: any
  }

  declare class LRU {
    set(key: string, value: any, maxAge?: number): any;
    get(key: string): any;
    peek(key: string): any;
    del(key: string): void;
    reset(): void;
    forEach(fn: Function, thisp?: Object): void;
    rforEach(fn: Function, thisp?: Object): void;
    has(key: string): boolean;
    keys(): Array<string>;
    values(): Array<any>;
    dump(): Array<any>;
    load(cacheEntriesArray: Array<any>): void;
    prune(): void;
    length: number;
    itemCount: number;
  }

  declare module .exports: (options: Options) => LRU
}
