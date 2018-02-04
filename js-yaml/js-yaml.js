declare module 'js-yaml' {
  declare type SCHEMA =
    'DEFAULT_SAFE_SCHEMA'
    | 'FAILSAFE_SCHEMA'
    | 'JSON_SCHEMA'
    | 'CORE_SCHEMA'
    | 'DEFAULT_FULL_SCHEMA';

  declare interface loadOptions {
    filename?: string;
    onWarning?: Function;
    schema?: SCHEMA;
    json?: boolean;
  }

  declare interface dumpOptions {
    indent?: number;
    skipInvalid?: boolean;
    flowLevel?: number;
    styles?: Object;
    schema?: SCHEMA;
    sortKeys?: boolean;
    lineWidth?: number;
    noRefs?: boolean;
    noCompatMode?: boolean;
    condenseFlow?: boolean;
  }

  declare module .exports: {
    safeLoad(string: string, options?: loadOptions): Object;
    load(string: string, options?: loadOptions): Object;
    safeLoadAll(string: string, iterator?: Function, options?: loadOptions): Object;
    loadAll(string: string, iterator?: Function, options?: loadOptions): Object;
    safeDump(object: Object, options?: Object): Object;
    dump(object: Object, options?: Object): Object;
  }
}
