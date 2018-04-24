declare module 'form-data' {
  declare interface Headers {
    [key: string]: any;
  }

  declare interface AppendOptions {
    header?: string | Headers;
    knownLength?: number;
    filename?: string;
    filepath?: string;
    contentType?: string;
  }

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
    timeout?: number;
    auth?: string;
    agent?: http$Agent | boolean;
    _defaultAgent?: http$Agent;
    createConnection?: (options: Object, oncreate: (err: Error, socket: net$Socket) => void) => net$Socket;
  }

  declare class FormData extends stream$Readable {
    append(key: string, value: any, options?: AppendOptions | string): void;
    getHeaders(): Headers;
    submit(params: string | HttpRequestOptions, callback?: (error: Error | void, response: http$IncomingMessage) => void): http$ClientRequest;
    getBoundary(): string;
    getLength(callback: (err: Error | void, length: number) => void): void;
    getLengthSync(): number;
    hasKnownLength(): boolean;
  }

  declare module.exports: Class<FormData>
}
