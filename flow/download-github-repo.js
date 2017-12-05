declare module 'download-github-repo' {
  declare var exports: (repo: string, destination: string, callback: (error: Error | void) => void) => void;
}
