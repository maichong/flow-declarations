declare module isbinaryfile {
  declare module.exports: {
    (filepath: string, callback: Function): void;
    (filepath: string, size: number, callback: Function): void;
    sync(filepath: string): boolean;
    sync(filepath: string, size: number): boolean;
  }
}
