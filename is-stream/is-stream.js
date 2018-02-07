declare module 'is-stream' {
  declare module .exports:{
    (stream: any): boolean;
    writable(stream: any): boolean;
    readable(stream: any): boolean;
    duplex(stream: any): boolean;
    transform(stream: any): boolean;
  }
}
