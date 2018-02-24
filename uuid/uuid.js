
type OutputBuffer = Array<number> | Buffer;

interface V1Options {
  node?: number[];
  clockseq?: number;
  msecs?: number | Date;
  nsecs?: number;
}

type V4Options = { random: number[] } | { rng(): number[] };

type v1 = {
  (options?: V1Options): string;
  (options: V1Options | null | void, buffer: Buffer, offset?: number): Buffer;
};

type v4 = {
  (options?: V4Options): string;
  (options: V4Options | null | void, buffer: Buffer, offset?: number): Buffer;
};

type v5 = {
  (name: string | number[], namespace: string | number[]): string;
  (name: string | number[], namespace: string | number[], buffer: Buffer, offset?: number): Buffer;
  DNS: string;
  URL: string;
};

declare module 'uuid/v1' {
  declare module.exports: v1;
}

declare module 'uuid/v3' {
  declare module.exports: v5;
}

declare module 'uuid/v4' {
  declare module.exports: v4;
}

declare module 'uuid/v5' {
  declare module.exports: v5;
}
