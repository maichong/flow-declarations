interface Dictionary<T> { [key: string]: T; }

interface ErrorCallback<T> { (err?: T): void; }
interface AsyncIterator<T, E> { (item: T, callback: ErrorCallback<E>): void; }
interface AsyncForEachOfIterator<T, E> { (item: T, key: number | string, callback: ErrorCallback<E>): void; }

type each = {
  <T, E>(arr: T[], iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
  <T, E>(arr: Dictionary<T>, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
};

type eachLimit = {
  <T, E>(arr: T[], limit: number, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
  <T, E>(arr: Dictionary<T>, limit: number, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
};

type forEachOf = {
  <T, E>(obj: T[], iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
  <T, E>(obj: Dictionary<T>, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
};

type forEachOfLimit = {
  <T, E>(obj: T[], limit: number, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
  <T, E>(obj: Dictionary<T>, limit: number, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
};

declare module async {
  declare module.exports: {
    each: each;
    eachSeries: each;
    forEach: each;
    forEachSeries: each;
    eachLimit: eachLimit;
    forEachLimit: eachLimit;
    forEachOf: forEachOf;
    forEachOfSeries: forEachOf;
    eachOf: forEachOf;
    eachOfSeries: forEachOf;
    forEachOfLimit: forEachOfLimit;
    eachOfLimit: forEachOfLimit;
  }
}

declare module 'async/each' {
  declare module.exports: each;
}

declare module 'async/eachSeries' {
  declare module.exports: each;
}

declare module 'async/forEach' {
  declare module.exports: each;
}

declare module 'async/forEachSeries' {
  declare module.exports: each;
}

declare module 'async/eachLimit' {
  declare module.exports: eachLimit;
}

declare module 'async/forEachLimit' {
  declare module.exports: eachLimit;
}

declare module 'async/forEachOf' {
  declare module.exports: forEachOf;
}

declare module 'async/forEachOfSeries' {
  declare module.exports: forEachOf;
}

declare module 'async/eachOf' {
  declare module.exports: forEachOf;
}

declare module 'async/eachOfSeries' {
  declare module.exports: forEachOf;
}

declare module 'async/forEachOfLimit' {
  declare module.exports: forEachOfLimit;
}

declare module 'async/eachOfLimit' {
  declare module.exports: forEachOfLimit;
}
