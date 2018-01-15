declare module 'art-template' {
  declare type Caches = {
    set(key: string, val: any): void;
    get(key: string): any;
    reset(): any;
  };

  declare type Options = {
    filename?: null | string,
    rules?: Array<{
      test: RegExp,
      use?: (Array<any>, code: string) => {
        code: string,
        output: false | 'escape' | 'raw'
      }
    }>,
    escape?: boolean,
    debug?: boolean,
    bail?: boolean,
    cache?: boolean,
    minimize?: boolean,
    compileDebug?: boolean,
    resolveFilename?: (filename: string, options: Object) => string,
    include?: (filename: string, data: Object, blocks: Object, options: Options) => string,
    htmlMinifier?: (source: string, options: Object) => string,
    htmlMinifierOptions?: {},
    onerror?: Function,
    loader?: (filename: string) => string,
    caches?: Caches,
    root?: string,
    extname?: string,
    ignore?: string[],
    imports?: Object
  };

  declare module .exports:{
    (filename: string, content?: string | Options): string;
    compile(source: string | Options, options?: Options): Function;
    render(source: string, data: Object, options?: Options): string;
  }
}
