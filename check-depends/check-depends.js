declare module 'check-depends' {

  declare type Value = any;

  declare interface ComparisonExpression {
    $eq?: Value;
    $ne?: Value;
    $gt?: Value;
    $gte?: Value;
    $lt?: Value;
    $lte?: Value;
    $in?: Value[];
    $nin?: Value[];
    $not?: ComparisonExpression;
    $regex?: RegExp | 'string';
    $options?: string; // i m g
    $all?: Array<Value | ComparisonExpression>;
    $elemMatch?: QueryExpression | ComparisonExpression;
    $size?: number;
    $exists?: boolean;
  }

  declare interface QueryExpression {
    [key: string]: Value | ComparisonExpression;

    $and?: ComparisonExpression[];
    $nor?: ComparisonExpression[];
    $or?: ComparisonExpression[];
    $jsonSchema?: Object;
  }

  declare type DependsQueryExpression = void | null | boolean | string | QueryExpression;

  declare function checkDepends(depends: DependsQueryExpression, data: Object): boolean;

  declare module.exports: checkDepends;
}
