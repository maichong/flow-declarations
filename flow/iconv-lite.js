declare module 'iconv-lite' {
  declare module .exports:{
    decode(input: Buffer, encoding: string): string,
    encode(input: string, encoding: string): Buffer;
    encodingExists(encoding: string): boolean;
  }
}
