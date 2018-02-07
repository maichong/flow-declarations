// TODO

declare module "mockjs" {
  declare module.exports: {
    mock: (str: any) => any,
    Random: {
      string: (min?: any, max?: any) => any
    }
  }
}
