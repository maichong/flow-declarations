import type { Middleware } from 'koa';

declare module 'koa-compose' {
  declare function compose(middleware: Array<Middleware>): Middleware;
  declare module.exports: compose;
}
