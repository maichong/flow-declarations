// copy from https://github.com/flowtype/flow-typed/blob/master/definitions/npm/mkdirp_v0.5.x/flow_v0.25.0-/mkdirp_v0.5.x.js

declare module 'mkdirp' {
  declare type Options = number | { mode?: number; fs?: mixed };

  declare type Callback = (err: ?Error, path: ?string) => void;

  declare module.exports: {
    (path: string, options?: Options | Callback, callback?: Callback): void;
    sync(path: string, options?: Options): void;
  };
}
