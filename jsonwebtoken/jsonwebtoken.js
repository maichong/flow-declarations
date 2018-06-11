declare module jsonwebtoken {
  declare class JsonWebTokenError extends Error {
    inner: Error;

    constructor(message: string, error?: Error): void;
  }

  declare class TokenExpiredError extends JsonWebTokenError {
    expiredAt: number;

    constructor(message: string, expiredAt: number): void;
  }

  declare class NotBeforeError extends JsonWebTokenError {
    date: Date;

    constructor(message: string, date: Date): void;
  }

  declare interface SignOptions {
    /**
     * Signature algorithm. Could be one of these values :
     * - HS256:    HMAC using SHA-256 hash algorithm (default)
     * - HS384:    HMAC using SHA-384 hash algorithm
     * - HS512:    HMAC using SHA-512 hash algorithm
     * - RS256:    RSASSA using SHA-256 hash algorithm
     * - RS384:    RSASSA using SHA-384 hash algorithm
     * - RS512:    RSASSA using SHA-512 hash algorithm
     * - ES256:    ECDSA using P-256 curve and SHA-256 hash algorithm
     * - ES384:    ECDSA using P-384 curve and SHA-384 hash algorithm
     * - ES512:    ECDSA using P-521 curve and SHA-512 hash algorithm
     * - none:     No digital signature or MAC value included
     */
    algorithm?: string;
    keyid?: string;
    /** @member {string} - expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, "2 days", "10h", "7d" */
    expiresIn?: string | number;
    /** @member {string} - expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, "2 days", "10h", "7d" */
    notBefore?: string | number;
    audience?: string | string[];
    subject?: string;
    issuer?: string;
    jwtid?: string;
    noTimestamp?: boolean;
    header?: Object;
    encoding?: string;
  }

  declare interface VerifyOptions {
    algorithms?: string[];
    audience?: string | string[];
    clockTimestamp?: number;
    clockTolerance?: number;
    issuer?: string | string[];
    ignoreExpiration?: boolean;
    ignoreNotBefore?: boolean;
    jwtid?: string;
    subject?: string;
    /**
     *@deprecated
     *@member {string} - Max age of token
     */
    maxAge?: string;
  }

  declare interface DecodeOptions {
    complete?: boolean;
    json?: boolean;
  }

  declare interface VerifyCallback {
    (
      err: JsonWebTokenError | NotBeforeError | TokenExpiredError,
      decoded: Object | string,
    ): void;
  }

  declare type Secret = string | Buffer | { key: string; passphrase: string };

  declare module.exports: {
    /**
     * Synchronously sign the given payload into a JSON Web Token string
     * @param {String|Object|Buffer} payload - Payload to sign, could be an literal, buffer or string
     * @param {String|Buffer} secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
     * @param {SignOptions} [options] - Options for the signature
     * @returns {String} The JSON Web Token string
     */
    sign(
      payload: string | Buffer | Object,
      secretOrPrivateKey: Secret,
      options: SignOptions,
    ): string;

    /**
     * Sign the given payload into a JSON Web Token string
     * @param {String|Object|Buffer} payload - Payload to sign, could be an literal, buffer or string
     * @param {String|Buffer} secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
     * @param {SignOptions} [options] - Options for the signature
     * @param {Function} callback - Callback to get the encoded token on
     */
    // sign(
    //   payload: string | Buffer | Object,
    //   secretOrPrivateKey: Secret,
    //   options: SignOptions,
    //   callback: Function,
    // ): void;

    /**
     * Synchronously verify given token using a secret or a public key to get a decoded token
     * @param {String} token - JWT string to verify
     * @param {String|Buffer} secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
     * @param {VerifyOptions} [options] - Options for the verification
     * @returns The decoded token.
     */
    verify(
      token: string,
      secretOrPublicKey: string | Buffer,
    ): Object | string;
    verify(
      token: string,
      secretOrPublicKey: string | Buffer,
      options ?: VerifyOptions,
    ): Object | string;

    /**
     * Asynchronously verify given token using a secret or a public key to get a decoded token
     * @param {String} token - JWT string to verify
     * @param {String|Buffer} secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
     * @param {VerifyOptions} [options] - Options for the verification
     * @param {Function} callback - Callback to get the decoded token on
     */
    verify(
      token: string,
      secretOrPublicKey: string | Buffer,
      callback ?: VerifyCallback,
    ): void;
    verify(
      token: string,
      secretOrPublicKey: string | Buffer,
      options?: VerifyOptions,
      callback?: VerifyCallback,
    ): void;

    /**
     * Returns the decoded payload without verifying if the signature is valid.
     * @param {String} token - JWT string to decode
     * @param {DecodeOptions} [options] - Options for decoding
     * @returns {Object} The decoded Token
     */
    decode(
      token: string,
      options?: DecodeOptions,
    ): null | { [key: string]: any } | string;
  };
}
