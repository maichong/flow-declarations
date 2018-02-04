declare module through {
  declare class ThroughStream extends stream$Transform {
    autoDestroy: boolean;
  }

  declare function through(write?: (data: any) => void,
                           end?: () => void,
                           opts?: {
                             autoDestroy: boolean;
                           }): ThroughStream;

  declare module .exports:through
}
