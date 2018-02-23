import type { Adapter } from 'fsd';

declare module 'fsd-fs' {
  declare interface FSAdapterOptions {
    root: string;
    mode?: number;
    urlPrefix?: string;
    tmpdir?: string;
  }

  declare class FSAdpter extends Adapter {
    constructor(options: FSAdapterOptions): void;
  }

  declare module .exports:Class<FSAdpter>
}
