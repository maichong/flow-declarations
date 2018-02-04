declare module statuses {

  declare interface Status {
    codes: number[];
    redirect: { [code: number]: boolean | void };
    empty: { [code: number]: boolean | void };
    retry: { [code: number]: boolean | void };

    (code: number | string): number;
  }

  declare interface CodesToMessages {
    [code: number]: string | void;
  }

  declare interface MessagesToCodes {
    [msg: string]: number | void;
  }

  declare type status = Status & CodesToMessages & MessagesToCodes;

  declare module .exports: status
}
