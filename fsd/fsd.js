declare module fsd {
  declare interface DriverOptions {
    adapter: Adapter;
  }

  declare interface ReadStreamOptions {
    start?: number;
    end?: number;
  }

  declare interface WriteStreamOptions {
    start?: number; // ! fsd-oss 不支持 start
  }

  declare interface FileMetadata {
    size?: number;
    lastModified?: Date;
  }

  declare interface CreateUrlOptions {
    expires?: number;
    response?: {
      'content-type'?: string;
      'content-disposition'?: string;
    }
  }

  declare type Task = string;
  declare type Part = string;

  declare class FSDFile {
    path: string;
    dir: string;
    base: string;
    name: string;
    ext: string;
    append(data: string | Buffer | stream$Readable): Promise<void>;
    read(encoding: string): Promise<string>;
    read(position?: number, length?: number): Promise<Buffer>;
    read(position: number, length: number, encoding: string): Promise<string>;
    write(data: string | Buffer | stream$Readable): Promise<void>;
    createReadStream(options?: ReadStreamOptions): Promise<stream$Readable>;
    createWriteStream(options?: WriteStreamOptions): Promise<stream$Writable>;
    unlink(): Promise<void>;
    mkdir(prefix?: boolean): Promise<void>;
    readdir(recursion?: true | string): Promise<FSDFile[]>;
    createUrl(options?: CreateUrlOptions): Promise<string>;
    copy(dest: string): Promise<FSDFile>;
    rename(dest: string): Promise<void>;
    exists(): Promise<boolean>;
    isFile(): Promise<boolean>;
    isDirectory(): Promise<boolean>;
    size(): Promise<number>;
    lastModified(): Promise<Date>;
    initMultipartUpload(partCount: number): Promise<Task[]>;
    writePart(partTask: Task, data: string | Buffer | stream$Readable, size?: number): Promise<Part>;
    completeMultipartUpload(parts: Part[]): Promise<void>;
    toString(): string;
    toJSON(): string;
  }

  declare class Adapter {
    name: string;
    constructor(options: Object): void;
    append(path: string, data: string | Buffer | stream$Readable): Promise<void>;
    createReadStream(path: string, options?: ReadStreamOptions): Promise<stream$Readable>;
    createWriteStream(path: string, options?: WriteStreamOptions): Promise<stream$Writable>;
    unlink(path: string): Promise<void>;
    mkdir(path: string, prefix?: boolean): Promise<void>;
    readdir(path: string, recursion?: true | string | Object): Promise<Array<{ name: string, metadata?: FileMetadata }>>;
    createUrl(path: string, options?: CreateUrlOptions): Promise<string>;
    copy(path: string, dest: string): Promise<void>;
    rename(path: string, dest: string): Promise<void>;
    exists(path: string): Promise<boolean>;
    isFile(path: string): Promise<boolean>;
    isDirectory(path: string): Promise<boolean>;
    size(path: string): Promise<number>;
    lastModified(path: string): Promise<Date>;
    initMultipartUpload(path: string, partCount: number): Promise<Task[]>;
    writePart(path: string, partTask: Task, data: stream$Readable, size: number): Promise<Part>;
    completeMultipartUpload(path: string, parts: Part[]): Promise<void>;
  }

  declare type fsd = {
    (path: string | FSDFile): FSDFile;
    adapter: Adapter;
  };

  declare function FSD(options: DriverOptions): fsd;

  declare module.exports: FSD
}
