import type { URL } from 'url';

declare module got {
  declare interface HttpRequestOptions {
    protocol?: string;
    host?: string;
    hostname?: string;
    family?: number;
    port?: number | string;
    defaultPort?: number | string;
    localAddress?: string;
    socketPath?: string;
    method?: string;
    path?: string;
    headers?: Object;
    auth?: string;
    agent?: http$Agent | boolean;
    _defaultAgent?: http$Agent;
    createConnection?: (options: Object, oncreate: (err: Error, socket: net$Socket) => void) => net$Socket;
  }

  declare interface TimeoutOptions {
    connect?: number;
    socket?: number;
    request?: number;
  }

  declare type RetryFunction = (retry: number, error: any) => number;

  declare interface Response<T> extends http$IncomingMessage {
    body: T;
    url: string;
    requestURL: string;
    redirectURLs?: string[];
  }

  declare type GotPromise<T> = Promise<Response<T>> & {
    cancel(): void
  }

  declare type GotURL = string | HttpRequestOptions | URL;

  declare interface GotOptions<E> extends HttpRequestOptions {
    +body?: string | Object | Buffer | stream$Readable;
    form?: boolean;
    timeout?: any;
    encoding?: E;
    query?: string | Object;
    timeout?: number | TimeoutOptions;
    retries?: number | RetryFunction;
    followRedirect?: boolean;
    decompress?: boolean;
    useElectronNet?: boolean;
  }

  declare interface GotJSONOptions extends GotOptions<string | null> {
    json: true;
  }

  declare type GotFn = {
    (url: GotURL): GotPromise<string>;
    (url: GotURL, options: GotJSONOptions): GotPromise<any>;
    (url: GotURL, options: GotOptions<string>): GotPromise<string>;
    (url: GotURL, options: GotOptions<null>): GotPromise<Buffer>;
    get: GotFn;
    post: GotFn;
    put: GotFn;
    patch: GotFn;
    head: GotFn;
    delete: GotFn;
    stream: (url: GotURL, options?: GotOptions<null | string>) => stream$Duplex;
  }

  declare module.exports: GotFn;
}
