declare module 'git-url-parse' {
  declare type GitUrl = {
    filepath: string,
    filepathtype: string,
    full_name: string,
    git_suffix: true,
    hash: string,
    href: string,
    name: string,
    organization: string,
    owner: string,
    pathname: string,
    port: null,
    protocol: string,
    protocols: string[],
    ref: string,
    resource: string,
    search: string,
    source: string,
    toString(): string;
    token: string,
    user: string,
  };

  declare module.exports: {
    (url: string): GitUrl;
    stringify(info: Object): string;
  }
}
