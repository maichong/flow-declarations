declare module 'download-github-repo' {
  declare module.exports: (repo: string, destination: string, callback: (error: Error | void) => void) => void;
}
