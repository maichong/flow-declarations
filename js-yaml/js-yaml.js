declare module 'js-yaml' {
  declare type SCHEMA =
    'DEFAULT_SAFE_SCHEMA'
    | 'FAILSAFE_SCHEMA'
    | 'JSON_SCHEMA'
    | 'CORE_SCHEMA'
    | 'DEFAULT_FULL_SCHEMA';

  declare interface LoadOptions {
    filename?: string;
    onWarning?: Function;
    schema?: SCHEMA;
    json?: boolean;
  }

  declare interface DumpOptions {
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
    safeLoad(string: string, options?: LoadOptions): Object;
    load(string: string, options?: LoadOptions): Object;
    safeLoadAll(string: string, iterator?: Function, options?: LoadOptions): Object[];
    loadAll(string: string, iterator?: Function, options?: LoadOptions): Object[];
    safeDump(object: Object, options?: DumpOptions): string;
    dump(object: Object, options?: DumpOptions): string;
  }
}
