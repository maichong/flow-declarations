declare module cpr {
  declare interface Options {
    deleteFirst?: boolean;
    overwrite?: boolean;
    confirm?: boolean;
    filter?: RegExp | Function;
  }
  declare module.exports: {
    (from: string, to: string, options?: Options, callback: Function): void;
  }
}
