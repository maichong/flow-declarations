declare module 'is-file' {
  declare module .exports: {
    (path: string, cb?: Function): boolean | void;
    sync(path: string): boolean;
  }
}
