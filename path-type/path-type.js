declare module 'path-type' {
  declare module.exports: {
    file(path: string): Promise<boolean>;
    dir(path: string): Promise<boolean>;
    symlink(path: string): Promise<boolean>;
    fileSync(path: string): boolean;
    dirSync(path: string): boolean;
    symlinkSync(path: string): boolean;
  }
}
