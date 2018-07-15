declare module bytes {
  declare interface BytesOptions {
    decimalPlaces?: number;
    thousandsSeparator?: string;
    unitSeparator?: string;
    fixedDecimals?: boolean;
    unit?: string;
  }

  declare module.exports: {
    (value: number, options?: BytesOptions): string;
    (value: string): number;
    format(value: number, options ?: BytesOptions): string;
    parse(value: string | number): number;
  }
}
