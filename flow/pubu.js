declare module pubu {
  declare interface Options {
    url?: string;
    displayUser?: {
      name: string,
      avatarUrl: string
    }
  }

  declare class Pubu {
    constructor(config: Options): void;
    init(config: Options): this;
    getInstance(name: string): Pubu;
    post(text: string, atts?: Object, file?: stream$Readable): Promise<Object>;
    code(name: string, code: string, type: string): Promise<Object>;
  }

  declare module .exports:Pubu
}
