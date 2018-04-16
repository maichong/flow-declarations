declare module hasha {
  declare type Options = {
    encoding?: 'hex' | 'base64' | 'buffer' | 'binary',
    algorithm?: 'md5' | 'sha1' | 'sha256' | 'sha512'
  };
  declare module.exports: {
    (input: string | string[] | Buffer | Buffer[], options?: Options): string;
    stream(options ?: Options): stream$Duplex;
    fromStream(stream: stream$Readable, options ?: Options): Promise<string>;
    fromFile(filepath: string, options ?: Options): Promise<string>;
    fromFileSync(filepath: string, options ?: Options): string;
  }
}
