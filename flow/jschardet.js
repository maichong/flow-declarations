declare module jschardet {
  declare module .exports:{
    detect(input: string): { encoding: string, confidence: number },
    Constants: {
      _debug: boolean,
      MINIMUM_THRESHOLD: number
    }
  }
}
