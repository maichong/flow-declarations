declare module delay {
  declare interface DelayPromise<T> extends Promise<T>{
    cancel():void;
  }

  declare module.exports: {
    (ms: number): DelayPromise<void>;
    <T>(ms: number, value: T): DelayPromise<T>;
    reject(ms: number, value?: any): DelayPromise<void>;
  }
}
