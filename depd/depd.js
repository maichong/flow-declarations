declare module 'depd' {
  declare function deprecate(message: string): void;

  declare module.exports: (namespace: string) => deprecate;
}
