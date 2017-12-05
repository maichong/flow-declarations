// Convented from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mz

import * as child_process from "child_process";
import * as dns from "dns";
import * as fs from "fs";
import * as readline from "readline";
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
    declare export * from "child_process";

  declare export function exec(command: string, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;

  declare export function exec(command: string, options: child_process.ExecOptionsWithBufferEncoding, callback: (error: Error, stdout: Buffer, stderr: Buffer) => void): child_process.ChildProcess;

  declare export function exec(command: string, options: child_process.ExecOptionsWithStringEncoding | child_process.ExecOptions | void | null, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;

  declare export function exec(command: string, options: child_process.ExecOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;

  declare export function exec(command: string, options?: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecOptions | null): Promise<[Buffer, Buffer]>;

  declare export function execFile(file: string, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;

  declare export function execFile(file: string, args: string[] | null | void, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;

  declare export function execFile(file: string, args: string[] | null | void, options: child_process.ExecFileOptionsWithBufferEncoding, callback: (error: Error, stdout: Buffer, stderr: Buffer) => void): child_process.ChildProcess;

  declare export function execFile(file: string, args: string[] | null | void, options: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecFileOptions | void | null, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;

  declare export function execFile(file: string, args: string[] | null | void, options: child_process.ExecFileOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;

  declare export function execFile(file: string, args: string[] | null | void, options?: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecFileOptions | null): Promise<[string, string]>;

  declare export function execFile(file: string, options: child_process.ExecFileOptionsWithBufferEncoding, callback: (error: Error, stdout: Buffer, stderr: Buffer) => void): child_process.ChildProcess;

  declare export function execFile(file: string, options: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecFileOptions | void | null, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;

  declare export function execFile(file: string, options: child_process.ExecFileOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;

  declare export function execFile(file: string, options?: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecFileOptions | null): Promise<[string, string]>;
}

declare module 'mz/crypto' {
    declare export * from "crypto";

  declare export function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any): void;

  declare export function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest?: string): Promise<Buffer>;

  declare export function randomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void;

  declare export function randomBytes(size: number): Promise<Buffer>;

  declare export function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void;

  declare export function pseudoRandomBytes(size: number): Promise<Buffer>;
}

declare module 'mz/dns' {
    declare export * from "dns";

  declare export function lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) => void): void;

  declare export function lookup(domain: string, callback: (err: Error, address: string, family: number) => void): void;

  declare export function lookup(domain: string, family?: number): Promise<[string, number]>;

  declare export function resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) => void): void;

  declare export function resolve(domain: string, callback: (err: Error, addresses: string[]) => void): void;

  declare export function resolve(domain: string, rrtype?: string): Promise<string[]>;

  declare export function resolve4(domain: string, callback: (err: Error, addresses: string[]) => void): void;

  declare export function resolve4(domain: string): Promise<string[]>;

  declare export function resolve6(domain: string, callback: (err: Error, addresses: string[]) => void): void;

  declare export function resolve6(domain: string): Promise<string[]>;

  declare export function resolveMx(domain: string, callback: (err: Error, addresses: dns.MxRecord[]) => void): void;

  declare export function resolveMx(domain: string): Promise<dns.MxRecord[]>;

  declare export function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) => void): void;

  declare export function resolveTxt(domain: string): Promise<string[]>;

  declare export function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) => void): void;

  declare export function resolveSrv(domain: string): Promise<string[]>;

  declare export function resolveNs(domain: string, callback: (err: Error, addresses: string[]) => void): void;

  declare export function resolveNs(domain: string): Promise<string[]>;

  declare export function resolveCname(domain: string, callback: (err: Error, addresses: string[]) => void): void;

  declare export function resolveCname(domain: string): Promise<string[]>;

  declare export function reverse(ip: string, callback: (err: Error, domains: string[]) => void): void;

  declare export function reverse(ip: string): Promise<string[]>;
}

declare module 'mz/readline' {
    declare export * from "readline";

  declare export interface ReadLine extends readline.ReadLine {
    question(query: string, callback: (answer: string) => void): void;

    question(query: string): Promise<string>;
  }

  declare export interface Completer {
    (line: string, callback: (err: any, result: [string[], string]) => void): void;

    (line: string): Promise<[string[], string]> | [string[], string];
  }

  declare export interface ReadLineOptions {
    input: ReadableStream;
    output?: WritableStream;
    completer?: Completer;
    terminal?: boolean;
    historySize?: number;
  }

  declare export function createInterface(input: ReadableStream, output?: WritableStream, completer?: Completer, terminal?: boolean): ReadLine;

  declare export function createInterface(options: ReadLineOptions): ReadLine;
}

declare module 'mz/zlib' {
    declare export * from "zlib";

  declare export function deflate(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;

  declare export function deflate(buf: Buffer): Promise<Buffer>;

  declare export function deflateRaw(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;

  declare export function deflateRaw(buf: Buffer): Promise<Buffer>;

  declare export function gzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;

  declare export function gzip(buf: Buffer): Promise<Buffer>;

  declare export function gunzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;

  declare export function gunzip(buf: Buffer): Promise<Buffer>;

  declare export function inflate(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;

  declare export function inflate(buf: Buffer): Promise<Buffer>;

  declare export function inflateRaw(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;

  declare export function inflateRaw(buf: Buffer): Promise<Buffer>;

  declare export function unzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;

  declare export function unzip(buf: Buffer): Promise<Buffer>;
}

declare module 'mz/fs' {
    declare export * from "fs";

  /**
   * Asynchronous `rename(2)`.
   */
  declare export function rename(oldPath: string, newPath: string, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `rename(2)`.
   */
  declare export function rename(oldPath: string, newPath: string): Promise<void>;

  /**
   * Asynchronous `truncate(2)`.
   *
   * If the file was larger than `len` bytes, only the first `len` bytes will be retained in the file.
   */
  declare export function truncate(path: string | Buffer, len: number, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `truncate(2)`.
   *
   * If the file was larger than `len` bytes, only the first `len` bytes will be retained in the file.
   */
  declare export function truncate(path: string | Buffer, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `truncate(2)`.
   *
   * If the file was larger than `len` bytes, only the first `len` bytes will be retained in the file.
   */
  declare export function truncate(path: string | Buffer, len?: number): Promise<void>;

  /**
   * Asynchronous `ftruncate(2)`.
   *
   * If the file referred to by the file descriptor was larger than `len` bytes, only the first `len`
   * bytes will be retained in the file.
   */
  declare export function ftruncate(fd: number, len: number, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `ftruncate(2)`.
   */
  declare export function ftruncate(fd: number, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `ftruncate(2)`.
   *
   * If the file referred to by the file descriptor was larger than `len` bytes, only the first `len`
   * bytes will be retained in the file.
   */
  declare export function ftruncate(fd: number, len?: number): Promise<void>;

  /**
   * Asynchronous `chown(2)`.
   */
  declare export function chown(path: string | Buffer, uid: number, gid: number, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `chown(2)`.
   */
  declare export function chown(path: string | Buffer, uid: number, gid: number): Promise<void>;

  /**
   * Asynchronous `fchown(2)`.
   */
  declare export function fchown(fd: number, uid: number, gid: number, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `fchown(2)`.
   */
  declare export function fchown(fd: number, uid: number, gid: number): Promise<void>;

  /**
   * (Deprecated) Asynchronous `lchown(2)`.
   */
  declare export function lchown(path: string | Buffer, uid: number, gid: number, callback: (err?: Error) => void): void;

  /**
   * (Deprecated) Asynchronous `lchown(2)`.
   */
  declare export function lchown(path: string | Buffer, uid: number, gid: number): Promise<void>;

  /**
   * Asynchronous `chmod(2)`.
   */
  declare export function chmod(path: string | Buffer, mode: string | number, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `chmod(2)`.
   */
  declare export function chmod(path: string | Buffer, mode: string | number): Promise<void>;

  /**
   * Asynchronous `fchmod(2)`.
   */
  declare export function fchmod(fd: number, mode: string | number, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `fchmod(2)`.
   */
  declare export function fchmod(fd: number, mode: string | number): Promise<void>;

  /**
   * (Deprecated) Asynchronous `lchmod(2)`.
   *
   * NOTE: Only available on Mac OS X.
   */
  declare export function lchmod(path: string | Buffer, mode: string | number, callback: (err?: Error) => void): void;

  /**
   * (Deprecated) Asynchronous `lchmod(2)`.
   *
   * NOTE: Only available on Mac OS X.
   */
  declare export function lchmod(path: string | Buffer, mode: string | number): Promise<void>;

  /**
   * Asynchronous `stat(2)`.
   */
  declare export function stat(path: string | Buffer, callback: (err: Error, stats: fs.Stats) => any): void;

  /**
   * Asynchronous `stat(2)`.
   */
  declare export function stat(path: string | Buffer): Promise<fs.Stats>;

  /**
   * Asynchronous `lstat(2)`.
   *
   * `lstat()` is identical to `stat()`, except that if path is a symbolic link, then the link itself
   * is stat-ed, not the file that it refers to.
   */
  declare export function lstat(path: string | Buffer, callback: (err: Error, stats: fs.Stats) => any): void;

  /**
   * Asynchronous `lstat(2)`.
   *
   * `lstat()` is identical to `stat()`, except that if path is a symbolic link, then the link itself
   * is stat-ed, not the file that it refers to.
   */
  declare export function lstat(path: string | Buffer): Promise<fs.Stats>;

  /**
   * Asynchronous `fstat(2)`.
   */
  declare export function fstat(fd: number, callback: (err: Error, stats: fs.Stats) => any): void;

  /**
   * Asynchronous `fstat(2)`.
   */
  declare export function fstat(fd: number): Promise<fs.Stats>;

  /**
   * Asynchronous `link(2)`.
   */
  declare export function link(srcpath: string | Buffer, dstpath: string | Buffer, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `link(2)`.
   */
  declare export function link(srcpath: string | Buffer, dstpath: string | Buffer): Promise<void>;

  /**
   * Asynchronous `symlink(2)`.
   */
  declare export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type: string, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `symlink(2)`.
   */
  declare export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `symlink(2)`.
   */
  declare export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type?: string): Promise<void>;

  /**
   * Asynchronous `readlink(2)`.
   */
  declare export function readlink(path: string | Buffer, callback: (err: Error, linkString: string) => any): void;

  /**
   * Asynchronous `readlink(2)`.
   */
  declare export function readlink(path: string | Buffer): Promise<string>;

  /**
   * Asynchronous `realpath(3)`.
   */
  declare export function realpath(path: string | Buffer, callback: (err: Error, resolvedPath: string) => any): void;

  /**
   * Asynchronous `realpath(3)`.
   */
  declare export function realpath(path: string | Buffer): Promise<string>;

  /**
   * Asynchronous `unlink(2)`.
   *
   * Deletes the file specified in `path`.
   *
   * @param path The path to a file.
   */
  declare export function unlink(path: string | Buffer, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `unlink(2)`.
   *
   * Deletes the file specified in `path`.
   *
   * @param path The path to a file.
   */
  declare export function unlink(path: string | Buffer): Promise<void>;

  /**
   * Asynchronous `rmdir(2)`
   *
   * Removes the directory specified in `path`.
   *
   * @param path The path to the directory.
   */
  declare export function rmdir(path: string | Buffer, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `rmdir(2)`
   *
   * Removes the directory specified in `path`.
   *
   * @param path The path to the directory.
   */
  declare export function rmdir(path: string | Buffer): Promise<void>;

  /**
   * Asynchronous `mkdir(2)`.
   *
   * Creates the directory specified in `path`.
   *
   * @param path The path to the directory.
   * @param mode The mode for the directory (default: `0777`).
   */
  declare export function mkdir(path: string | Buffer, mode: string | number, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `mkdir(2)`.
   *
   * Creates the directory specified in `path`.
   *
   * @param path The path to the directory.
   * @param mode The mode for the directory (default: `0777`).
   */
  declare export function mkdir(path: string | Buffer, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `mkdir(2)`.
   *
   * Creates the directory specified in `path`.
   *
   * @param path The path to the directory.
   * @param mode The mode for the directory (default: `0777`).
   */
  declare export function mkdir(path: string | Buffer, mode?: string | number): Promise<void>;

  /**
   * Creates a unique temporary directory.
   *
   * @param prefix temp dir prefix
   * @param options "$encoding" or {encoding: "$encoding"}
   */
  declare export function mkdtemp(prefix: string, options: string | { encoding: string }, callback: (err: Error | void, folder: string) => void): void

  /**
   * Creates a unique temporary directory.
   *
   * @param prefix temp dir prefix
   * @param options "$encoding" or {encoding: "$encoding"}
   */
  declare export function mkdtemp(prefix: string, callback: (err: Error | void, folder: string) => void): void;

  /**
   * Creates a unique temporary directory.
   *
   * @param prefix temp dir prefix
   * @param options "$encoding" or {encoding: "$encoding"}
   */
  declare export function mkdtemp(prefix: string, options: string | { encoding: string }): Promise<string>

  /**
   * Asynchronous `readdir(3)`.
   *
   * Reads the contents of a directory.
   */
  declare export function readdir(path: string | Buffer, callback: (err: Error, files: string[]) => void): void;

  /**
   * Asynchronous `readdir(3)`.
   *
   * Reads the contents of a directory.
   */
  declare export function readdir(path: string | Buffer): Promise<string[]>;

  /**
   * Asynchronous `close(2)`.
   */
  declare export function close(fd: number, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `close(2)`.
   */
  declare export function close(fd: number): Promise<void>;

  /**
   * Asynchronous `open(2)`.
   */
  declare export function open(path: string | Buffer, flags: string | number, mode: number, callback: (err: Error, fd: number) => void): void;

  /**
   * Asynchronous `open(2)`.
   */
  declare export function open(path: string | Buffer, flags: string | number, callback: (err: Error, fd: number) => void): void;

  /**
   * Asynchronous `open(2)`.
   */
  declare export function open(path: string | Buffer, flags: string | number, mode?: number): Promise<number>;

  /**
   * Change the file timestamps of the file referenced by the supplied path.
   */
  declare export function utimes(path: string | Buffer, atime: number | Date, mtime: number | Date, callback: (err?: Error) => void): void;

  /**
   * Change the file timestamps of the file referenced by the supplied path.
   */
  declare export function utimes(path: string | Buffer, atime: number | Date, mtime: number | Date): Promise<void>;

  /**
   * Change the file timestamps of a file referenced by the supplied file descriptor.
   */
  declare export function futimes(fd: number, atime: number | Date, mtime: number | Date, callback: (err?: Error) => void): void;

  /**
   * Change the file timestamps of a file referenced by the supplied file descriptor.
   */
  declare export function futimes(fd: number, atime: number | Date, mtime: number | Date): Promise<void>;

  /**
   * Asynchronous `fsync(2)`.
   */
  declare export function fsync(fd: number, callback: (err?: Error) => void): void;

  /**
   * Asynchronous `fsync(2)`.
   */
  declare export function fsync(fd: number): Promise<void>;

  /**
   * Write `data` to the file specified by `fd`.
   */
  declare export function write(fd: number, data: any, position: number, encoding: string, callback: (err: Error, written: number, str: string) => void): void;

  /**
   * Write `data` to the file specified by `fd`.
   */
  declare export function write(fd: number, data: any, position: number, callback: (err: Error, written: number, str: string) => void): void;

  /**
   * Write `data` to the file specified by `fd`.
   */
  declare export function write(fd: number, data: any, callback: (err: Error, written: number, str: string) => void): void;

  /**
   * Write `data` to the file specified by `fd`.
   */
  declare export function write(fd: number, data: string, position?: number, encoding?: string): Promise<[number, string]>;

  /**
   * Write `buffer` to the file specified by `fd`.
   */
  declare export function write(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback: (err: Error, written: number, buffer: Buffer) => void): void;

  /**
   * Write `buffer` to the file specified by `fd`.
   */
  declare export function write(fd: number, buffer: Buffer, offset: number, length: number, callback: (err: Error, written: number, buffer: Buffer) => void): void;

  /**
   * Write `buffer` to the file specified by `fd`.
   */
  declare export function write(fd: number, buffer: Buffer, offset: number, length: number, position?: number): Promise<[number, Buffer]>;

  /**
   * Read data from the file specified by `fd`.
   */
  declare export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback: (err: Error, bytesRead: number, buffer: Buffer) => void): void;

  /**
   * Read data from the file specified by `fd`.
   */
  declare export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number): Promise<[number, Buffer]>;

  /**
   * Asynchronously reads the entire contents of a file.
   *
   * @param file The filename or descriptor
   * @param options The encoding for the result, or an object containing options.
   */
  declare export function readFile(file: string | number | Buffer, options: { encoding?: "buffer" | null; flag?: string; } | "buffer" | void | null, callback: (err: Error, data: Buffer) => void): void;

  /**
   * Asynchronously reads the entire contents of a file.
   *
   * @param file The filename or descriptor
   * @param options The encoding for the result, or an object containing options.
   */
  declare export function readFile(file: string | number | Buffer, options: { encoding: string; flag?: string; } | string, callback: (err: Error, data: string) => void): void;

  /**
   * Asynchronously reads the entire contents of a file.
   *
   * @param file The filename or descriptor
   */
  declare export function readFile(file: string | number | Buffer, callback: (err: Error, data: Buffer) => void): void;

  /**
   * Asynchronously reads the entire contents of a file.
   *
   * @param file The filename or descriptor
   * @param options The encoding for the result, or an object containing options.
   */
  declare export function readFile(file: string | number | Buffer, options?: { encoding?: "buffer" | null; flag?: string; } | "buffer" | null): Promise<Buffer>;

  /**
   * Asynchronously reads the entire contents of a file.
   *
   * @param file The filename or descriptor
   * @param options The encoding for the result, or an object containing options.
   */
  declare export function readFile(file: string | number | Buffer, options: { encoding: string; flag?: string; } | string): Promise<string>;

  /**
   * Asynchronously writes data to a file, replacing the file if it already exists.
   */
  declare export function writeFile(filename: string | number | Buffer, data: string | Buffer, options: { encoding?: string | null; mode?: string | number; flag?: string; } | string | void | null, callback: (err: Error) => void): void;

  /**
   * Asynchronously writes data to a file, replacing the file if it already exists.
   */
  declare export function writeFile(filename: string | number | Buffer, data: string | Buffer, callback: (err: Error) => void): void;

  /**
   * Asynchronously writes data to a file, replacing the file if it already exists.
   */
  declare export function writeFile(file: string | number | Buffer, data: string | Buffer, options?: { encoding?: string | null; mode?: string | number; flag?: string; } | string | null): Promise<void>;

  /**
   * Asynchronously append data to a file, creating the file if it does not yet exist.
   *
   * @param file The path to the file or a file descriptor.
   * @param data The data to append to the file.
   * @param options The encoding for `data`, or an object with additional options.
   */
  declare export function appendFile(file: string | number | Buffer, data: string | Buffer, options: { encoding?: string | null; mode?: string | number; flag?: string; } | string | void | null, callback: (err: Error) => void): void;

  /**
   * Asynchronously append data to a file, creating the file if it does not yet exist.
   *
   * @param file The path to the file or a file descriptor.
   * @param data The data to append to the file.
   */
  declare export function appendFile(file: string | number | Buffer, data: string | Buffer, callback: (err: Error) => void): void;

  /**
   * Asynchronously append data to a file, creating the file if it does not yet exist.
   *
   * @param file The path to the file or a file descriptor.
   * @param data The data to append to the file.
   * @param options The encoding for `data`, or an object with additional options.
   */
  declare export function appendFile(file: string | number | Buffer, data: string | Buffer, options?: { encoding?: string | null; mode?: number | string; flag?: string; } | string | null): Promise<void>;

  /**
   * Test whether or not the given path exists by checking with the file system.
   *
   * @param path The path to access.
   */
  declare export function exists(path: string | Buffer, callback: (err: Error, exists: boolean) => void): void;

  /**
   * Test whether or not the given path exists by checking with the file system.
   *
   * @param path The path to access.
   */
  declare export function exists(path: string): Promise<boolean>;

  /**
   * Tests a user's permissions for the file specified by `path`.
   *
   * @param path The path to access.
   * @param mode An optional integer that specifies the accessibility checks to be performed.
   */
  declare export function access(path: string | Buffer, mode: number, callback: (err: Error) => void): void;

  /**
   * Tests a user's permissions for the file specified by `path`.
   *
   * @param path The path to access.
   */
  declare export function access(path: string | Buffer, callback: (err: Error) => void): void;

  /**
   * Tests a user's permissions for the file specified by `path`.
   *
   * @param path The path to access.
   * @param mode An optional integer that specifies the accessibility checks to be performed.
   */
  declare export function access(path: string, mode?: number): Promise<void>;

}
