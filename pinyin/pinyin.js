// TODO

declare module 'pinyin' {
  declare export var STYLE_NORMAL: string;
  declare export var STYLE_TONE: string;
  declare export var STYLE_TONE2: string;
  declare export var STYLE_TO3NE: string;
  declare export var STYLE_INITIALS: string;
  declare export var STYLE_FIRST_LETTER: string;
  declare export default (input: string, opts?: Object) => Array < string[] >;
}
