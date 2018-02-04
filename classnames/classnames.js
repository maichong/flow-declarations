// copy from https://github.com/flowtype/flow-typed/blob/master/definitions/npm/classnames_v2.x.x/flow_v0.25.x-/classnames_v2.x.x.js

type $npm$classnames$Classes =
  | string
  | { [className: string]: * }
  | false
  | void
  | null;

declare module "classnames" {
  declare module.exports: (
    ...classes: Array<$npm$classnames$Classes | $npm$classnames$Classes[]>
  ) => string;
}

declare module "classnames/bind" {
  declare module.exports: $Exports<"classnames">;
}

declare module "classnames/dedupe" {
  declare module.exports: $Exports<"classnames">;
}
