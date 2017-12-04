declare module 'china-tel-verify' {
  declare var exports: {
    (tel: string): boolean;
    isCMCC: (tel: string) => boolean;
    isCTCC: (tel: string) => boolean;
    isCUCC: (tel: string) => boolean;
  };
}
