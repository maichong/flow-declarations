// copy from https://github.com/flowtype/flow-typed/blob/master/definitions/npm/prop-types_v15.x.x/flow_v0.41.x-/prop-types_v15.x.x.js

type $npm$propTypes$ReactPropsCheckType = (
  props: any,
  propName: string,
  componentName: string,
  href?: string) => ?Error;

declare module 'prop-types' {
  declare var array: React$PropType$Primitive<Array<any>>;
  declare var bool: React$PropType$Primitive<boolean>;
  declare var func: React$PropType$Primitive<Function>;
  declare var number: React$PropType$Primitive<number>;
  declare var object: React$PropType$Primitive<Object>;
  declare var string: React$PropType$Primitive<string>;
  declare var any: React$PropType$Primitive<any>;
  declare var arrayOf: React$PropType$ArrayOf;
  declare var element: React$PropType$Primitive<any>; /* TODO */
  declare var instanceOf: React$PropType$InstanceOf;
  declare var node: React$PropType$Primitive<any>; /* TODO */
  declare var objectOf: React$PropType$ObjectOf;
  declare var oneOf: React$PropType$OneOf;
  declare var oneOfType: React$PropType$OneOfType;
  declare var shape: React$PropType$Shape;

  declare function checkPropTypes<V>(
    propTypes: $Subtype<{[_: $Keys<V>]: $npm$propTypes$ReactPropsCheckType}>,
    values: V,
    location: string,
    componentName: string,
    getStack: ?(() => ?string)
  ) : void;
}
