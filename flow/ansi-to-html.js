// TODO

declare module 'ansi-to-html' {
  declare class ANSI {
    toHtml(input: string): string
  }

  declare var exports: Class<ANSI>;
}
