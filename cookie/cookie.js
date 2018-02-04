// Convented from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/cookie/index.d.ts

declare module cookie {
  declare interface CookieSerializeOptions {
    encode?: (val: string) => string;
    domain?: string;
    expires?: Date;
    httpOnly?: boolean;
    maxAge?: number;
    path?: string;
    sameSite?: boolean | 'lax' | 'strict';
    secure?: boolean;
  }

  declare interface CookieParseOptions {
    decode?: (val: string) => string;
  }

  declare module .exports:{
    parse(str: string, options?: CookieParseOptions): { [key: string]: string };
    serialize(name: string, val: string, options?: CookieSerializeOptions): string;
  }
}
