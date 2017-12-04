// copy from https://github.com/flowtype/flow-typed/blob/master/definitions/npm/md5_v1.0.x/flow_v0.25.x-/md5_v1.0.x.js

// @flow

declare module "md5" {
  declare module.exports: (
    message: string | Buffer,
    options?: {
      asString?: boolean,
      asBytes?: boolean,
      encoding?: string
    }
  ) => string;
}
