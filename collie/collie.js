declare module 'collie' {
  declare function collie(obj: Object, method: string, original?: Function): void;

  declare module.exports: collie;
}
