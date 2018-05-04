declare module 'node-fetch' {
  declare class Request extends Body {
    constructor(input: string | Request, init?: RequestInit): void;
    method: string;
    url: string;
    headers: Headers;
    context: RequestContext;
    referrer: string;
    redirect: RequestRedirect;

    //node-fetch extensions to the whatwg/fetch spec
    compress: boolean;
    agent?: http$Agent;
    counter: number;
    follow: number;
    hostname: string;
    protocol: string;
    port?: number;
    timeout: number;
    size: number;
  }

  declare interface RequestInit {
    //whatwg/fetch standard options
    method?: string;
    headers?: HeaderInit | { [index: string]: string };
    body?: BodyInit;
    redirect?: RequestRedirect;

    //node-fetch extensions
    timeout?: number; //=0 req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)
    compress?: boolean; //=true support gzip/deflate content encoding. false to disable
    size?: number; //=0 maximum response body size in bytes. 0 to disable
    agent?: http$Agent; //=null http.Agent instance, allows custom proxy, certificate etc.
    follow?: number; //=20 maximum redirect count. 0 to not follow redirect

    //node-fetch does not support mode, cache or credentials options
  }

  declare type RequestContext =
    "audio" | "beacon" | "cspreport" | "download" | "embed" |
    "eventsource" | "favicon" | "fetch" | "font" | "form" | "frame" |
    "hyperlink" | "iframe" | "image" | "imageset" | "import" |
    "internal" | "location" | "manifest" | "object" | "ping" | "plugin" |
    "prefetch" | "script" | "serviceworker" | "sharedworker" |
    "subresource" | "style" | "track" | "video" | "worker" |
    "xmlhttprequest" | "xslt";
  declare type RequestMode = "same-origin" | "no-cors" | "cors";
  declare type RequestRedirect = "follow" | "error" | "manual";
  declare type RequestCredentials = "omit" | "same-origin" | "include";
  declare type RequestCache =
    "default" | "no-store" | "reload" | "no-cache" |
    "force-cache" | "only-if-cached";

  declare class Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    getAll(name: string): Array<string>;
    has(name: string): boolean;
    set(name: string, value: string): void;
    forEach(callback: (value: string, name: string) => void): void;
  }

  declare class Body {
    bodyUsed: boolean;
    body: stream$Readable;
    json(): Promise<any>;
    json<T>(): Promise<T>;
    text(): Promise<string>;
    buffer(): Promise<Buffer>;
    arrayBuffer(): Promise<ArrayBuffer>;
  }

  declare class Response extends Body {
    constructor(body?: BodyInit, init?: ResponseInit): void;
    static error(): Response;
    static redirect(url: string, status: number): Response;
    type: ResponseType;
    url: string;
    status: number;
    ok: boolean;
    size: number;
    statusText: string;
    timeout: number;
    headers: Headers;
    clone(): Response;
  }

  declare type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";

  declare interface ResponseInit {
    status: number;
    statusText?: string;
    headers?: HeaderInit;
  }

  declare type HeaderInit = Headers | Array<string>;
  declare type BodyInit = ArrayBuffer | string | stream$Readable;
  declare type RequestInfo = Request | string;

  declare module.exports: (url: string | Request, init?: RequestInit) => Promise<Response>;
}
