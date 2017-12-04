declare module 'intl-messageformat' {
  declare class IntlMessageFormat {
    constructor(message: string, locales: string | Array<string>, formats?: Object): void;

    resolvedOptions(): { locale: string };
    format(values: Object): string;
  }

  declare var exports: Class<IntlMessageFormat>;
}
