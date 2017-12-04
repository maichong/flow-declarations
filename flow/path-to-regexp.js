declare module 'path-to-regexp' {
  declare var exports: {
    (path: string | string[] | RegExp,
     keys?: Object[],
     options?: {
       sensitive?: boolean,
       strict?: boolean,
       end?: boolean,
       delimiter?: boolean
     }): RegExp;
    compile(str: string): (params: Object) => string;
    parse(str: string): Array<string | {
      name: number | string;
      prefix: string;
      delimiter: string;
      optional: boolean;
      repeat: boolean;
      pattern: string;
    }>;
  };
}
