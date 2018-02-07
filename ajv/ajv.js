declare module ajv {
  declare class Ajv {
    constructor(options?: Options): void;
    /**
     * Validate data using schema
     * Schema will be compiled and cached (using serialized JSON as key, [fast-json-stable-stringify](https://github.com/epoberezkin/fast-json-stable-stringify) is used to serialize by default).
     * @param  {string|object|Boolean} schemaKeyRef key, ref or schema object
     * @param  {Any} data to be validated
     * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
     */
    validate(schemaKeyRef: Object | string | boolean, data: any): boolean | Thenable<any>;

    /**
     * Create validating function for passed schema.
     * @param  {object|Boolean} schema schema object
     * @return {Function} validating function
     */
    compile(schema: Object | boolean): ValidateFunction;

    /**
     * Creates validating function for passed schema with asynchronous loading of missing schemas.
     * `loadSchema` option should be a function that accepts schema uri and node-style callback.
     * @this  Ajv
     * @param {object|Boolean} schema schema object
     * @param {Boolean} meta optional true to compile meta-schema; this parameter can be skipped
     * @param {Function} callback optional node-style callback, it is always called with 2 parameters: error (or null) and validating function.
     * @return {Thenable<ValidateFunction>} validating function
     */
    compileAsync(schema: Object | boolean, meta?: boolean, callback?: (err: Error, validate: ValidateFunction) => any): Thenable<ValidateFunction>;

    /**
     * Adds schema to the instance.
     * @param {object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
     * @param {string} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
     * @return {Ajv} this for method chaining
     */
    addSchema(schema: Array<Object> | Object, key?: string): Ajv;

    /**
     * Add schema that will be used to validate other schemas
     * options in META_IGNORE_OPTIONS are alway set to false
     * @param {object} schema schema object
     * @param {string} key optional schema key
     * @return {Ajv} this for method chaining
     */
    addMetaSchema(schema: Object, key?: string): Ajv;

    /**
     * Validate schema
     * @param {object|Boolean} schema schema to validate
     * @return {Boolean} true if schema is valid
     */
    validateSchema(schema: Object | boolean): boolean;

    /**
     * Get compiled schema from the instance by `key` or `ref`.
     * @param  {string} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
     * @return {Function} schema validating function (with property `schema`).
     */
    getSchema(keyRef: string): ValidateFunction;

    /**
     * Remove cached schema(s).
     * If no parameter is passed all schemas but meta-schemas are removed.
     * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
     * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
     * @param  {string|object|RegExp|Boolean} schemaKeyRef key, ref, pattern to match key/ref or schema object
     * @return {Ajv} this for method chaining
     */
    removeSchema(schemaKeyRef?: Object | string | RegExp | boolean): Ajv;

    /**
     * Add custom format
     * @param {string} name format name
     * @param {string|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
     * @return {Ajv} this for method chaining
     */
    addFormat(name: string, format: FormatValidator | FormatDefinition): Ajv;

    /**
     * Define custom keyword
     * @this  Ajv
     * @param {string} keyword custom keyword, should be a valid identifier, should be different from all standard, custom and macro keywords.
     * @param {object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
     * @return {Ajv} this for method chaining
     */
    addKeyword(keyword: string, definition: KeywordDefinition): Ajv;

    /**
     * Get keyword definition
     * @this  Ajv
     * @param {string} keyword pre-defined or custom keyword.
     * @return {object|Boolean} custom keyword definition, `true` if it is a predefined keyword, `false` otherwise.
     */
    getKeyword(keyword: string): Object | boolean;

    /**
     * Remove keyword
     * @this  Ajv
     * @param {string} keyword pre-defined or custom keyword.
     * @return {Ajv} this for method chaining
     */
    removeKeyword(keyword: string): Ajv;

    /**
     * Convert array of error message objects to string
     * @param  {Array<object>} errors optional array of validation errors, if not passed errors from the instance are used.
     * @param  {object} options optional options with properties `separator` and `dataVar`.
     * @return {string} human readable string with all errors descriptions
     */
    errorsText(errors?: Array<ErrorObject>, options?: ErrorsTextOptions): string;

    errors?: Array<ErrorObject>;
  }

  declare interface Thenable<R> {
    then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
  }

  declare interface ValidateFunction {
    (data: any,
     dataPath?: string,
     parentData?: Object | Array<any>,
     parentDataProperty?: string | number,
     rootData?: Object | Array<any>): boolean | Thenable<any>;

    schema?: Object | boolean;
    errors?: null | Array<ErrorObject>;
    refs?: Object;
    refVal?: Array<any>;
    root?: ValidateFunction | Object;
    $async?: true;
    source?: Object;
  }

  declare interface Options {
    $data?: boolean;
    allErrors?: boolean;
    verbose?: boolean;
    jsonPointers?: boolean;
    uniqueItems?: boolean;
    unicode?: boolean;
    format?: string;
    formats?: Object;
    unknownFormats?: true | string[] | 'ignore';
    schemas?: Array<Object> | Object;
    schemaId?: '$id' | 'id' | 'auto';
    missingRefs?: true | 'ignore' | 'fail';
    extendRefs?: true | 'ignore' | 'fail';
    loadSchema?: (uri: string, cb?: (err: Error, schema: Object) => void) => Thenable<Object | boolean>;
    +removeAdditional?: boolean | 'all' | 'failing';
    useDefaults?: boolean | 'shared';
    +coerceTypes?: boolean | 'array';
    async?: boolean | string;
    transpile?: string | ((code: string) => string);
    meta?: boolean | Object;
    validateSchema?: boolean | 'log';
    addUsedSchema?: boolean;
    inlineRefs?: boolean | number;
    passContext?: boolean;
    loopRequired?: number;
    ownProperties?: boolean;
    multipleOfPrecision?: boolean | number;
    errorDataPath?: string,
    messages?: boolean;
    sourceCode?: boolean;
    processCode?: (code: string) => string;
    cache?: Object;
  }

  declare type FormatValidator = string | RegExp | ((data: string) => boolean | Thenable<any>);

  declare interface FormatDefinition {
    validate: FormatValidator;
    compare: (data1: string, data2: string) => number;
    async?: boolean;
  }

  declare interface KeywordDefinition {
    type?: string | Array<string>;
    async?: boolean;
    $data?: boolean;
    errors?: boolean | string;
    metaSchema?: Object;
    // schema: false makes validate not to expect schema (ValidateFunction)
    schema?: boolean;
    modifying?: boolean;
    valid?: boolean;
    // one and only one of the following properties should be present
    validate?: SchemaValidateFunction | ValidateFunction;
    compile?: (schema: any, parentSchema: Object, it: CompilationContext) => ValidateFunction;
    macro?: (schema: any, parentSchema: Object, it: CompilationContext) => Object | boolean;
    inline?: (it: CompilationContext, keyword: string, schema: any, parentSchema: Object) => string;
  }

  declare interface CompilationContext {
    level: number;
    dataLevel: number;
    schema: any;
    schemaPath: string;
    baseId: string;
    async: boolean;
    opts: Options;
    formats: {
      [index: string]: FormatDefinition | void;
    };
    compositeRule: boolean;
    validate: (schema: Object) => boolean;
    util: {
      copy(obj: any, target?: any): any;
      toHash(source: string[]): { [index: string]: true | void };
      equal(obj: any, target: any): boolean;
      getProperty(str: string): string;
      schemaHasRules(schema: Object, rules: any): string;
      escapeQuotes(str: string): string;
      toQuotedString(str: string): string;
      getData(jsonPointer: string, dataLevel: number, paths: string[]): string;
      escapeJsonPointer(str: string): string;
      unescapeJsonPointer(str: string): string;
      escapeFragment(str: string): string;
      unescapeFragment(str: string): string;
    };
    self: Ajv;
  }

  declare interface SchemaValidateFunction {
    (schema: any,
     data: any,
     parentSchema?: Object,
     dataPath?: string,
     parentData?: Object | Array<any>,
     parentDataProperty?: string | number,
     rootData?: Object | Array<any>): boolean | Thenable<any>;

    errors?: Array<ErrorObject>;
  }

  declare interface ErrorsTextOptions {
    separator?: string;
    dataVar?: string;
  }

  declare interface ErrorObject {
    keyword: string;
    dataPath: string;
    schemaPath: string;
    params: ErrorParameters;
    // Added to validation errors of propertyNames keyword schema
    propertyName?: string;
    // Excluded if messages set to false.
    message?: string;
    // These are added with the `verbose` option.
    schema?: any;
    parentSchema?: Object;
    data?: any;
  }

  declare type ErrorParameters = RefParams | LimitParams | AdditionalPropertiesParams |
    DependenciesParams | FormatParams | ComparisonParams |
    MultipleOfParams | PatternParams | RequiredParams |
    TypeParams | UniqueItemsParams | CustomParams |
    PatternRequiredParams | PropertyNamesParams |
    IfParams | SwitchParams | NoParams | EnumParams;

  declare interface RefParams {
    ref: string;
  }

  declare interface LimitParams {
    limit: number;
  }

  declare interface AdditionalPropertiesParams {
    additionalProperty: string;
  }

  declare interface DependenciesParams {
    property: string;
    missingProperty: string;
    depsCount: number;
    deps: string;
  }

  declare interface FormatParams {
    format: string
  }

  declare interface ComparisonParams {
    comparison: string;
    limit: number | string;
    exclusive: boolean;
  }

  declare interface MultipleOfParams {
    multipleOf: number;
  }

  declare interface PatternParams {
    pattern: string;
  }

  declare interface RequiredParams {
    missingProperty: string;
  }

  declare interface TypeParams {
    type: string;
  }

  declare interface UniqueItemsParams {
    i: number;
    j: number;
  }

  declare interface CustomParams {
    keyword: string;
  }

  declare interface PatternRequiredParams {
    missingPattern: string;
  }

  declare interface PropertyNamesParams {
    propertyName: string;
  }

  declare interface IfParams {
    failingKeyword: string;
  }

  declare interface SwitchParams {
    caseIndex: number;
  }

  declare interface NoParams {
  }

  declare interface EnumParams {
    allowedValues: Array<any>;
  }

  declare class ValidationError extends Error {
    constructor(errors: Array<ErrorObject>): void;

    message: string;
    errors: Array<ErrorObject>;
    ajv: true;
    validation: true;
  }

  declare class MissingRefError extends Error {
    constructor(baseId: string, ref: string, message?: string): void;
    static message: (baseId: string, ref: string) => string;

    message: string;
    missingRef: string;
    missingSchema: string;
  }

  declare module .exports:Class<Ajv>
}
