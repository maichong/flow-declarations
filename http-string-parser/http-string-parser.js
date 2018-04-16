declare module 'http-string-parser' {
  declare type Headers = {
    [key: string]: string
  };
  declare type RequestLine = {
    method: string,
    uri: string,
    protocol: string
  };
  declare type Request = RequestLine & {
    headers: Headers,
    body: string
  };
  declare type StatusLine = {
    protocolVersion: string,
    statusCode: string,
    statusMessage: string,
  };
  declare type Response = {
    protocol: string,
    statusCode: string,
    statusMessage: string,
    headers: Headers,
    body: string
  };
  declare module.exports : {
    parseRequest(requestString: string): Request;
    parseRequestLine(requestLineString: string): RequestLine;
    parseResponse(responseString: string): Response;
    parseStatusLine(requestLineString: string): StatusLine;
    parseHeaders(headerLines: string[]): Headers;
  }
}
