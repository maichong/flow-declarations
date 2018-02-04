declare module 'ini' {
  declare type Options = {
    section?: string,
    whitespace?: boolean,
  };
  declare module .exports: {
    decode(inistring: string): Object,
    parse(inistring: string): Object,
    encode(object: Object, options?: Options): string,
    stringify(object: Object, options?: Options): string,
    safe(val: string): string,
    unsafe(val: string): string
  }
}
