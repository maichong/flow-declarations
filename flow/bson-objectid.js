declare module 'bson-objectid' {
  declare module.exports: {
    (id?: string | number | bson$ObjectId): bson$ObjectId;
    createFromHexString(hexString: string): bson$ObjectId;
    createFromTime(time: number): bson$ObjectId;
    isValid(id?: string | number | bson$ObjectId | null | void): boolean;
    generate(time?: number): bson$ObjectId;
  }
}
