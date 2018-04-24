declare module 'alaska-field-text' {
  declare export default class TextField extends Alaska$Field {
  trim: boolean;
  match?: RegExp;
  lowercase: boolean;
  uppercase: boolean;
  maxlength: number;
  minlength: number;
  }
}
