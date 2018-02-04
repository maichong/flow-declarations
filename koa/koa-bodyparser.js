import type { Context, Middleware } from 'koa';

declare module 'koa-bodyparser' {
  declare interface Options {
    enableTypes?: string[];
    encode?: string;
    formLimit?: string;
    jsonLimit?: string;
    strict?: boolean;
    detectJSON?: (ctx: Context) => boolean;
    extendTypes?: {
      json?: string[];
      form?: string[];
      text?: string[];
    };
    onerror?: (err: Error, ctx: Context) => void;
  }

  declare module .exports : (options?: Options) => Middleware

}
