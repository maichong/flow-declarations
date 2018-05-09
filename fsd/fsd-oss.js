import type { Adapter } from 'fsd';

declare module 'fsd-oss' {
  declare interface OSSAdapterOptions {
    root?: string;
    accessKeyId: string;
    accessKeySecret: string;
    stsToken?: string;
    bucket?: string;
    region?: string;
    internal?: boolean;
    secure?: boolean;
    endpoint?: string;
    timeout?: string | number;
  }

  declare interface OSSAdpter extends Adapter {
    constructor(options: OSSAdapterOptions): void;
  }

  declare module.exports: Class<OSSAdpter>
}
