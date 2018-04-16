declare module carefree {
  declare module.exports: {
    (fn: Function | Promise<*>): Promise<null | Error>;
  }
}
