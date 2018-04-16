// Converted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mz

import * as child_process from "child_process";
import * as crypto from "crypto";
import * as dns from "dns";
import * as fs from "fs";
import * as readline from "readline";
import * as zlib from "zlib";
import type { ReadableStream, WritableStream } from 'stream';

declare module 'mz' {
    declare export * as child_process from "mz/child_process";
    declare export * as crypto from "mz/crypto";
    declare export * as dns from "mz/dns";
    declare export * as fs from "mz/fs";
    declare export * as readline from "mz/readline";
    declare export * as zlib from "mz/zlib";
}

declare module 'mz/child_process' {
  declare module .exports: {
    ...child_process,
    exec(command: string, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;
    exec(command: string, options: child_process.ExecOptionsWithBufferEncoding, callback: (error: Error, stdout: Buffer, stderr: Buffer) => void): child_process.ChildProcess;
    exec(command: string, options: child_process.ExecOptionsWithStringEncoding | child_process.ExecOptions | void | null, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;
    exec(command: string, options: child_process.ExecOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;
    exec(command: string, options?: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecOptions | null): Promise<[Buffer, Buffer]>;
    execFile(file: string, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;
    execFile(file: string, args: string[] | null | void, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;
    execFile(file: string, args: string[] | null | void, options: child_process.ExecFileOptionsWithBufferEncoding, callback: (error: Error, stdout: Buffer, stderr: Buffer) => void): child_process.ChildProcess;
    execFile(file: string, args: string[] | null | void, options: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecFileOptions | void | null, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;
    execFile(file: string, args: string[] | null | void, options: child_process.ExecFileOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;
    execFile(file: string, args: string[] | null | void, options?: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecFileOptions | null): Promise<[string, string]>;
    execFile(file: string, options: child_process.ExecFileOptionsWithBufferEncoding, callback: (error: Error, stdout: Buffer, stderr: Buffer) => void): child_process.ChildProcess;
    execFile(file: string, options: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecFileOptions | void | null, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;
    execFile(file: string, options: child_process.ExecFileOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;
    execFile(file: string, options?: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecFileOptions | null): Promise<[string, string]>;
  }
}

declare module 'mz/crypto' {
  declare module .exports: {
    ...crypto,
    pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any): void;
    pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest?: string): Promise<Buffer>;
    randomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void;
    randomBytes(size: number): Promise<Buffer>;
    pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void;
    pseudoRandomBytes(size: number): Promise<Buffer>;
  }
}

declare module 'mz/dns' {
  declare module .exports: {
    ...dns,
    lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) => void): void;
    lookup(domain: string, callback: (err: Error, address: string, family: number) => void): void;
    lookup(domain: string, family?: number): Promise<[string, number]>;
    resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) => void): void;
    resolve(domain: string, callback: (err: Error, addresses: string[]) => void): void;
    resolve(domain: string, rrtype?: string): Promise<string[]>;
    resolve4(domain: string, callback: (err: Error, addresses: string[]) => void): void;
    resolve4(domain: string): Promise<string[]>;
    resolve6(domain: string, callback: (err: Error, addresses: string[]) => void): void;
    resolve6(domain: string): Promise<string[]>;
    resolveMx(domain: string, callback: (err: Error, addresses: dns.MxRecord[]) => void): void;
    resolveMx(domain: string): Promise<dns.MxRecord[]>;
    resolveTxt(domain: string, callback: (err: Error, addresses: string[]) => void): void;
    resolveTxt(domain: string): Promise<string[]>;
    resolveSrv(domain: string, callback: (err: Error, addresses: string[]) => void): void;
    resolveSrv(domain: string): Promise<string[]>;
    resolveNs(domain: string, callback: (err: Error, addresses: string[]) => void): void;
    resolveNs(domain: string): Promise<string[]>;
    resolveCname(domain: string, callback: (err: Error, addresses: string[]) => void): void;
    resolveCname(domain: string): Promise<string[]>;
    reverse(ip: string, callback: (err: Error, domains: string[]) => void): void;
    reverse(ip: string): Promise<string[]>;
  }
}

declare module 'mz/readline' {
  declare export interface ReadLine extends readline.ReadLine {
    question(query: string, callback: (answer: string) => void): void;

    question(query: string): Promise<string>;
  }

  declare export interface Completer {
    (line: string, callback: (err: any, result: [string[], string]) => void): void;

    (line: string): Promise<[string[], string]> | [string[], string];
  }

  declare interface ReadLineOptions {
    input: ReadableStream;
    output?: WritableStream;
    completer?: Completer;
    terminal?: boolean;
    historySize?: number;
  }


  declare module .exports: {
    ...readline,
    createInterface(input: ReadableStream, output?: WritableStream, completer?: Completer, terminal?: boolean): ReadLine;
    createInterface(options: ReadLineOptions): ReadLine;
  }


}

declare module 'mz/zlib' {
  declare module .exports: {
    ...zlib,
    deflate(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
    deflate(buf: Buffer): Promise<Buffer>;
    deflateRaw(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
    deflateRaw(buf: Buffer): Promise<Buffer>;
    gzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
    gzip(buf: Buffer): Promise<Buffer>;
    gunzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
    gunzip(buf: Buffer): Promise<Buffer>;
    inflate(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
    inflate(buf: Buffer): Promise<Buffer>;
    inflateRaw(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
    inflateRaw(buf: Buffer): Promise<Buffer>;
    unzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
    unzip(buf: Buffer): Promise<Buffer>;
  }
}

declare module 'mz/fs' {
  declare module .exports: {
    ...fs,

    /**
     * Asynchronous `rename(2)`.
     */
    rename(oldPath: string, newPath: string, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `rename(2)`.
     */
    rename(oldPath: string, newPath: string): Promise<void>;

    /**
     * Asynchronous `truncate(2)`.
     *
     * If the file was larger than `len` bytes, only the first `len` bytes will be retained in the file.
     */
    truncate(path: string | Buffer, len: number, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `truncate(2)`.
     *
     * If the file was larger than `len` bytes, only the first `len` bytes will be retained in the file.
     */
    truncate(path: string | Buffer, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `truncate(2)`.
     *
     * If the file was larger than `len` bytes, only the first `len` bytes will be retained in the file.
     */
    truncate(path: string | Buffer, len?: number): Promise<void>;

    /**
     * Asynchronous `ftruncate(2)`.
     *
     * If the file referred to by the file descriptor was larger than `len` bytes, only the first `len`
     * bytes will be retained in the file.
     */
    ftruncate(fd: number, len: number, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `ftruncate(2)`.
     */
    ftruncate(fd: number, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `ftruncate(2)`.
     *
     * If the file referred to by the file descriptor was larger than `len` bytes, only the first `len`
     * bytes will be retained in the file.
     */
    ftruncate(fd: number, len?: number): Promise<void>;

    /**
     * Asynchronous `chown(2)`.
     */
    chown(path: string | Buffer, uid: number, gid: number, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `chown(2)`.
     */
    chown(path: string | Buffer, uid: number, gid: number): Promise<void>;

    /**
     * Asynchronous `fchown(2)`.
     */
    fchown(fd: number, uid: number, gid: number, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `fchown(2)`.
     */
    fchown(fd: number, uid: number, gid: number): Promise<void>;

    /**
     * (Deprecated) Asynchronous `lchown(2)`.
     */
    lchown(path: string | Buffer, uid: number, gid: number, callback: (err?: Error) => void): void;

    /**
     * (Deprecated) Asynchronous `lchown(2)`.
     */
    lchown(path: string | Buffer, uid: number, gid: number): Promise<void>;

    /**
     * Asynchronous `chmod(2)`.
     */
    chmod(path: string | Buffer, mode: string | number, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `chmod(2)`.
     */
    chmod(path: string | Buffer, mode: string | number): Promise<void>;

    /**
     * Asynchronous `fchmod(2)`.
     */
    fchmod(fd: number, mode: string | number, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `fchmod(2)`.
     */
    fchmod(fd: number, mode: string | number): Promise<void>;

    /**
     * (Deprecated) Asynchronous `lchmod(2)`.
     *
     * NOTE: Only available on Mac OS X.
     */
    lchmod(path: string | Buffer, mode: string | number, callback: (err?: Error) => void): void;

    /**
     * (Deprecated) Asynchronous `lchmod(2)`.
     *
     * NOTE: Only available on Mac OS X.
     */
    lchmod(path: string | Buffer, mode: string | number): Promise<void>;

    /**
     * Asynchronous `stat(2)`.
     */
    stat(path: string | Buffer, callback: (err: Error, stats: fs.Stats) => any): void;

    /**
     * Asynchronous `stat(2)`.
     */
    stat(path: string | Buffer): Promise<fs.Stats>;

    /**
     * Asynchronous `lstat(2)`.
     *
     * `lstat()` is identical to `stat()`, except that if path is a symbolic link, then the link itself
     * is stat-ed, not the file that it refers to.
     */
    lstat(path: string | Buffer, callback: (err: Error, stats: fs.Stats) => any): void;

    /**
     * Asynchronous `lstat(2)`.
     *
     * `lstat()` is identical to `stat()`, except that if path is a symbolic link, then the link itself
     * is stat-ed, not the file that it refers to.
     */
    lstat(path: string | Buffer): Promise<fs.Stats>;

    /**
     * Asynchronous `fstat(2)`.
     */
    fstat(fd: number, callback: (err: Error, stats: fs.Stats) => any): void;

    /**
     * Asynchronous `fstat(2)`.
     */
    fstat(fd: number): Promise<fs.Stats>;

    /**
     * Asynchronous `link(2)`.
     */
    link(srcpath: string | Buffer, dstpath: string | Buffer, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `link(2)`.
     */
    link(srcpath: string | Buffer, dstpath: string | Buffer): Promise<void>;

    /**
     * Asynchronous `symlink(2)`.
     */
    symlink(srcpath: string | Buffer, dstpath: string | Buffer, type: string, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `symlink(2)`.
     */
    symlink(srcpath: string | Buffer, dstpath: string | Buffer, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `symlink(2)`.
     */
    symlink(srcpath: string | Buffer, dstpath: string | Buffer, type?: string): Promise<void>;

    /**
     * Asynchronous `readlink(2)`.
     */
    readlink(path: string | Buffer, callback: (err: Error, linkString: string) => any): void;

    /**
     * Asynchronous `readlink(2)`.
     */
    readlink(path: string | Buffer): Promise<string>;

    /**
     * Asynchronous `realpath(3)`.
     */
    realpath(path: string | Buffer, callback: (err: Error, resolvedPath: string) => any): void;

    /**
     * Asynchronous `realpath(3)`.
     */
    realpath(path: string | Buffer): Promise<string>;

    /**
     * Asynchronous `unlink(2)`.
     *
     * Deletes the file specified in `path`.
     *
     * @param path The path to a file.
     */
    unlink(path: string | Buffer, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `unlink(2)`.
     *
     * Deletes the file specified in `path`.
     *
     * @param path The path to a file.
     */
    unlink(path: string | Buffer): Promise<void>;

    /**
     * Asynchronous `rmdir(2)`
     *
     * Removes the directory specified in `path`.
     *
     * @param path The path to the directory.
     */
    rmdir(path: string | Buffer, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `rmdir(2)`
     *
     * Removes the directory specified in `path`.
     *
     * @param path The path to the directory.
     */
    rmdir(path: string | Buffer): Promise<void>;

    /**
     * Asynchronous `mkdir(2)`.
     *
     * Creates the directory specified in `path`.
     *
     * @param path The path to the directory.
     * @param mode The mode for the directory (default: `0777`).
     */
    mkdir(path: string | Buffer, mode: string | number, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `mkdir(2)`.
     *
     * Creates the directory specified in `path`.
     *
     * @param path The path to the directory.
     * @param mode The mode for the directory (default: `0777`).
     */
    mkdir(path: string | Buffer, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `mkdir(2)`.
     *
     * Creates the directory specified in `path`.
     *
     * @param path The path to the directory.
     * @param mode The mode for the directory (default: `0777`).
     */
    mkdir(path: string | Buffer, mode?: string | number): Promise<void>;

    /**
     * Creates a unique temporary directory.
     *
     * @param prefix temp dir prefix
     * @param options "$encoding" or {encoding: "$encoding"}
     */
    mkdtemp(prefix: string, options: string | { encoding: string }, callback: (err: Error | void, folder: string) => void): void;

    /**
     * Creates a unique temporary directory.
     *
     * @param prefix temp dir prefix
     * @param options "$encoding" or {encoding: "$encoding"}
     */
    mkdtemp(prefix: string, callback: (err: Error | void, folder: string) => void): void;

    /**
     * Creates a unique temporary directory.
     *
     * @param prefix temp dir prefix
     * @param options "$encoding" or {encoding: "$encoding"}
     */
    mkdtemp(prefix: string, options: string | { encoding: string }): Promise<string>;

    /**
     * Asynchronous `readdir(3)`.
     *
     * Reads the contents of a directory.
     */
    readdir(path: string | Buffer, callback: (err: Error, files: string[]) => void): void;

    /**
     * Asynchronous `readdir(3)`.
     *
     * Reads the contents of a directory.
     */
    readdir(path: string | Buffer): Promise<string[]>;

    /**
     * Asynchronous `close(2)`.
     */
    close(fd: number, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `close(2)`.
     */
    close(fd: number): Promise<void>;

    /**
     * Asynchronous `open(2)`.
     */
    open(path: string | Buffer, flags: string | number, mode: number, callback: (err: Error, fd: number) => void): void;

    /**
     * Asynchronous `open(2)`.
     */
    open(path: string | Buffer, flags: string | number, callback: (err: Error, fd: number) => void): void;

    /**
     * Asynchronous `open(2)`.
     */
    open(path: string | Buffer, flags: string | number, mode?: number): Promise<number>;

    /**
     * Change the file timestamps of the file referenced by the supplied path.
     */
    utimes(path: string | Buffer, atime: number | Date, mtime: number | Date, callback: (err?: Error) => void): void;

    /**
     * Change the file timestamps of the file referenced by the supplied path.
     */
    utimes(path: string | Buffer, atime: number | Date, mtime: number | Date): Promise<void>;

    /**
     * Change the file timestamps of a file referenced by the supplied file descriptor.
     */
    futimes(fd: number, atime: number | Date, mtime: number | Date, callback: (err?: Error) => void): void;

    /**
     * Change the file timestamps of a file referenced by the supplied file descriptor.
     */
    futimes(fd: number, atime: number | Date, mtime: number | Date): Promise<void>;

    /**
     * Asynchronous `fsync(2)`.
     */
    fsync(fd: number, callback: (err?: Error) => void): void;

    /**
     * Asynchronous `fsync(2)`.
     */
    fsync(fd: number): Promise<void>;

    /**
     * Write `data` to the file specified by `fd`.
     */
    write(fd: number, data: any, position: number, encoding: string, callback: (err: Error, written: number, str: string) => void): void;

    /**
     * Write `data` to the file specified by `fd`.
     */
    write(fd: number, data: any, position: number, callback: (err: Error, written: number, str: string) => void): void;

    /**
     * Write `data` to the file specified by `fd`.
     */
    write(fd: number, data: any, callback: (err: Error, written: number, str: string) => void): void;

    /**
     * Write `data` to the file specified by `fd`.
     */
    write(fd: number, data: string, position?: number, encoding?: string): Promise<[number, string]>;

    /**
     * Write `buffer` to the file specified by `fd`.
     */
    write(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback: (err: Error, written: number, buffer: Buffer) => void): void;

    /**
     * Write `buffer` to the file specified by `fd`.
     */
    write(fd: number, buffer: Buffer, offset: number, length: number, callback: (err: Error, written: number, buffer: Buffer) => void): void;

    /**
     * Write `buffer` to the file specified by `fd`.
     */
    write(fd: number, buffer: Buffer, offset: number, length: number, position?: number): Promise<[number, Buffer]>;

    /**
     * Read data from the file specified by `fd`.
     */
    read(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback: (err: Error, bytesRead: number, buffer: Buffer) => void): void;

    /**
     * Read data from the file specified by `fd`.
     */
    read(fd: number, buffer: Buffer, offset: number, length: number, position: number): Promise<[number, Buffer]>;

    /**
     * Asynchronously reads the entire contents of a file.
     *
     * @param file The filename or descriptor
     * @param options The encoding for the result, or an object containing options.
     */
    readFile(file: string | number | Buffer, options: { encoding?: "buffer" | null; flag?: string; } | "buffer" | void | null, callback: (err: Error, data: Buffer) => void): void;

    /**
     * Asynchronously reads the entire contents of a file.
     *
     * @param file The filename or descriptor
     * @param options The encoding for the result, or an object containing options.
     */
    readFile(file: string | number | Buffer, options: { encoding: string; flag?: string; } | string, callback: (err: Error, data: string) => void): void;

    /**
     * Asynchronously reads the entire contents of a file.
     *
     * @param file The filename or descriptor
     */
    readFile(file: string | number | Buffer, callback: (err: Error, data: Buffer) => void): void;

    /**
     * Asynchronously reads the entire contents of a file.
     *
     * @param file The filename or descriptor
     * @param options The encoding for the result, or an object containing options.
     */
    readFile(file: string | number | Buffer, options?: { encoding?: "buffer" | null; flag?: string; } | "buffer" | null): Promise<Buffer>;

    /**
     * Asynchronously reads the entire contents of a file.
     *
     * @param file The filename or descriptor
     * @param options The encoding for the result, or an object containing options.
     */
    readFile(file: string | number | Buffer, options: { encoding: string; flag?: string; } | string): Promise<string>;

    /**
     * Asynchronously writes data to a file, replacing the file if it already exists.
     */
    writeFile(filename: string | number | Buffer, data: string | Buffer, options: { encoding?: string | null; mode?: string | number; flag?: string; } | string | void | null, callback: (err: Error) => void): void;

    /**
     * Asynchronously writes data to a file, replacing the file if it already exists.
     */
    writeFile(filename: string | number | Buffer, data: string | Buffer, callback: (err: Error) => void): void;

    /**
     * Asynchronously writes data to a file, replacing the file if it already exists.
     */
    writeFile(file: string | number | Buffer, data: string | Buffer, options?: { encoding?: string | null; mode?: string | number; flag?: string; } | string | null): Promise<void>;

    /**
     * Asynchronously append data to a file, creating the file if it does not yet exist.
     *
     * @param file The path to the file or a file descriptor.
     * @param data The data to append to the file.
     * @param options The encoding for `data`, or an object with additional options.
     */
    appendFile(file: string | number | Buffer, data: string | Buffer, options: { encoding?: string | null; mode?: string | number; flag?: string; } | string | void | null, callback: (err: Error) => void): void;

    /**
     * Asynchronously append data to a file, creating the file if it does not yet exist.
     *
     * @param file The path to the file or a file descriptor.
     * @param data The data to append to the file.
     */
    appendFile(file: string | number | Buffer, data: string | Buffer, callback: (err: Error) => void): void;

    /**
     * Asynchronously append data to a file, creating the file if it does not yet exist.
     *
     * @param file The path to the file or a file descriptor.
     * @param data The data to append to the file.
     * @param options The encoding for `data`, or an object with additional options.
     */
    appendFile(file: string | number | Buffer, data: string | Buffer, options?: { encoding?: string | null; mode?: number | string; flag?: string; } | string | null): Promise<void>;

    /**
     * Test whether or not the given path exists by checking with the file system.
     *
     * @param path The path to access.
     */
    exists(path: string | Buffer, callback: (err: Error, exists: boolean) => void): void;

    /**
     * Test whether or not the given path exists by checking with the file system.
     *
     * @param path The path to access.
     */
    exists(path: string): Promise<boolean>;

    /**
     * Tests a user's permissions for the file specified by `path`.
     *
     * @param path The path to access.
     * @param mode An optional integer that specifies the accessibility checks to be performed.
     */
    access(path: string | Buffer, mode: number, callback: (err: Error) => void): void;

    /**
     * Tests a user's permissions for the file specified by `path`.
     *
     * @param path The path to access.
     */
    access(path: string | Buffer, callback: (err: Error) => void): void;

    /**
     * Tests a user's permissions for the file specified by `path`.
     *
     * @param path The path to access.
     * @param mode An optional integer that specifies the accessibility checks to be performed.
     */
    access(path: string, mode?: number): Promise<void>;
  }


}
