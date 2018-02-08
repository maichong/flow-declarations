import type fs from 'fs';
import type { Options as GlobOptions } from 'glob';

declare module rimraf {
  declare interface Options {
    maxBusyTries?: number;
    emfileWait?: boolean;
    disableGlob?: boolean;
    glob?: GlobOptions | false;

    unlink?: $PropertyType<fs, 'unlink'>;
    chmod?: $PropertyType<fs, 'chmod'>;
    stat?: $PropertyType<fs, 'stat'>;
    lstat?: $PropertyType<fs, 'lstat'>;
    rmdir?: $PropertyType<fs, 'rmdir'>;
    readdir?: $PropertyType<fs, 'readdir'>;

    unlinkSync?: $PropertyType<fs, 'unlinkSync'>;
    chmodSync?: $PropertyType<fs, 'chmodSync'>;
    statSync?: $PropertyType<fs, 'statSync'>;
    lstatSync?: $PropertyType<fs, 'lstatSync'>;
    rmdirSync?: $PropertyType<fs, 'rmdirSync'>;
    readdirSync?: $PropertyType<fs, 'readdirSync'>;
  }

  declare module .exports:{
    (path: string, options: Options, callback: (error: Error) => void): void;
    (path: string, callback: (error: Error) => void): void;
    sync(path: string, options?: Options): void;
    EMFILE_MAX: number;
    BUSYTRIES_MAX: number;
  }
}
