declare module 'china-tel-verify' {
  declare module.exports: {
    (tel: string): boolean;
    isCMCC: (tel: string) => boolean;
    isCTCC: (tel: string) => boolean;
    isCUCC: (tel: string) => boolean;
  };
}
