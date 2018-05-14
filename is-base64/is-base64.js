declare module 'is-base64' {
  declare type Options = {
    paddingRequired?: boolean
  };

  declare module.exports: {
    (str: string, options?: Options): boolean;
  }
}
