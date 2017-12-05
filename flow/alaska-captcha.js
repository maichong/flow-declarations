declare module 'alaska-captcha' {
  declare class CaptchaService extends Alaska$Service {
    constructor(options?: Alaska$Service$options, mAlaska?: Alaska$Alaska): void;
    preLoadModels(): void;
    middleware(toPath: ?string): Function;
  }

  declare export default CaptchaService;
}

declare module 'alaska-captcha/models/Captcha' {
  declare export default class Captcha extends Alaska$Model {
  _id: string | number | Object | any;
  title: string;
  type: string;
  numbers: string;
  letters: string;
  length: number;
  lifetime: number;
  createdAt: Date;
  }
}

declare module 'alaska-captcha/sleds/Send' {
  declare export default class Send extends Alaska$Sled {

  }
}

declare module 'alaska-captcha/sleds/Verify' {
  declare export default class Verify extends Alaska$Sled {

  }
}
