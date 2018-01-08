declare type Default = {
  long2ip: (long: number) => string,
  Netmask: (net: string, mask?: number) => string
}
declare module 'netmask' {
  declare module.exports: Default;
}
