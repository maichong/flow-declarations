// TODO

declare module 'mockjs' {
  declare class Default {
    mock: (str: any) => any,
    Random: {
      string: (min?: any, max?: any) => any
    }
  }

  declare var exports: Class<Default>;
}
