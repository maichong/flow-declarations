declare module 'is-directory' {
  declare module .exports: {
    (path: string, cb: Function): void;
    sync(path: string): boolean;
  }
}
