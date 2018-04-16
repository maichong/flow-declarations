// Converted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/glob

import type { Stats } from 'fs';
import type { Options as MinimatchOptions, Minimatch } from 'minimatch';

declare module glob {
  declare function Callback(error?: Error, files: string[]): void;

  declare interface Options extends MinimatchOptions {
    cwd?: string;
    root?: string;
    dot?: boolean;
    nomount?: boolean;
    mark?: boolean;
    nosort?: boolean;
    stat?: boolean;
    silent?: boolean;
    strict?: boolean;
    cache?: { [path: string]: any };
    statCache?: { [path: string]: Stats };
    symlinks?: any;
    sync?: boolean;
    nounique?: boolean;
    nonull?: boolean;
    debug?: boolean;
    nobrace?: boolean;
    noglobstar?: boolean;
    noext?: boolean;
    nocase?: boolean;
    matchBase?: any;
    nodir?: boolean;
    ignore?: any;
    follow?: boolean;
    realpath?: boolean;
    nonegate?: boolean;
    nocomment?: boolean;
    absolute?: boolean;
  }

  declare class Glob extends events$EventEmitter {
    constructor(pattern: string, cb?: Callback): void;
    constructor(pattern: string, options?: Options, cb?: Callback): void;
    minimatch: Minimatch;
    options: Options;
    aborted: boolean;
    cache: { [path: string]: any };
    statCache: { [path: string]: Stats };
    symlinks: { [path: string]: boolean };
    realpathCache?: { [path: string]: string };
    found: string[];

    pause(): void;
    resume(): void;
    abort(): void;

    /** Deprecated. */
    EOF: any;
    /** Deprecated. */
    paused: boolean;
    /** Deprecated. */
    maxDepth: number;
    /** Deprecated. */
    maxLength: number;
    /** Deprecated. */
    changedCwd: boolean;
    /** Deprecated. */
    cwd: string;
    /** Deprecated. */
    root: string;
    /** Deprecated. */
    error: any;
    /** Deprecated. */
    matches: string[];
    /** Deprecated. */
    log(...args: any[]): void;
    /** Deprecated. */
    emitMatch(m: any): void;
  }

  declare module .exports:{
    (pattern: string, cb: Callback): void;
    (pattern: string, options: Options, cb: Callback): void;
    hasMagic(pattern: string, options?: Object): boolean;
    sync(pattern: string, options?: Object): string[];
  }
}
