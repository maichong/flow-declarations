declare module 'update-notifier' {
  declare class UpdateNotifier {
    constructor(settings?: Settings): void;

    update: UpdateInfo;
    check(): void;
    checkNpm(): void;
    notify(customMessage?: NotifyOptions): void;
  }

  declare interface Settings {
    pkg?: Package;

    callback?: (update?: UpdateInfo) => any;

    packageName?: string;
    packageVersion?: string;
    updateCheckInterval?: number; // in milliseconds, default 1000 * 60 * 60 * 24 (1 day)
  }

  declare interface BoxenOptions {
    padding: number;
    margin: number;
    align: string;
    borderColor: string;
    borderStyle: string;
  }

  declare interface NotifyOptions {
    message?: string;
    defer?: boolean;
    boxenOpts?: BoxenOptions;
  }

  declare interface Package {
    name: string;
    version: string;
  }

  declare interface UpdateInfo {
    latest: string;
    current: string;
    type: string;
    name: string;
  }

  declare module.exports: (settings?: Settings) => UpdateNotifier;
}
