declare module 'alaska-queue-redis' {
  declare export default class RedisQueueDriver {
  constructor(options: Object): void;
  key: string;
  options: Object;
  isQueueDriver: boolean;
  _driver: any;
  push(item: any): Promise<any>;
  pop(timeout: number): any;
  free(): void;
  destroy(): void;
  }
}
