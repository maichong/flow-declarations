// copy from https://github.com/flowtype/flow-typed/blob/master/definitions/npm/react-dnd-html5-backend_v2.1.x/flow_v0.25.x-/react-dnd-html5-backend_v2.1.x.js

declare type $npm$reactDnd$NativeTypes$FILE = "__NATIVE_FILE__";
declare type $npm$reactDnd$NativeTypes$URL = "__NATIVE_URL__";
declare type $npm$reactDnd$NativeTypes$TEXT = "__NATIVE_TEXT__";
declare type $npm$reactDnd$NativeTypes =
  | $npm$reactDnd$NativeTypes$FILE
  | $npm$reactDnd$NativeTypes$URL
  | $npm$reactDnd$NativeTypes$TEXT;

declare module "react-dnd-html5-backend" {
  declare module.exports: {
    getEmptyImage(): Image,
    NativeTypes: {
      FILE: $npm$reactDnd$NativeTypes$FILE,
      URL: $npm$reactDnd$NativeTypes$URL,
      TEXT: $npm$reactDnd$NativeTypes$TEXT
    }
  };
}
