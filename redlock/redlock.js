import type { RedisClient } from 'redis';

declare module redlock {
  declare type Options = {
    driftFactor?: number,
    retryCount?: number,
    retryDelay?: number,
    retryJitter?: number,
  };
  declare class Lock {
    unlock(callback?: Function): Promise<void>;
    extend(ttl: number, callback?: Function): Promise<void>;
  }
  declare class Redlock {
    constructor(clients: RedisClient[], options?: Options): void;
    lock(resource: string, ttl: number, callback?: Function): Promise<Lock>;
    unlock(lock: Lock, callback?: Function): Promise<void>;
    extend(lock: Lock, ttl: number, callback?: Function): Promise<Lock>;
    disposer(resource: string, ttl: number, unlockErrorHandler?: Function): void;
    quit(callback?: Function): Promise<any[]>;
  }
  declare module.exports : Class<Redlock>;
}
