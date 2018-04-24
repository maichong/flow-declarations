declare module 'alaska-goods/models/Brand' {
  declare export default class Brand extends Alaska$Model<Brand> {
  title: string;
  brief: string;
  icon: Object;
  logo: Object;
  pic: Object;
  initial: string;
  sort: number;
  createdAt: Date;
  desc: string;
  preSave(): void;
  }
}

declare module 'alaska-goods/models/Goods' {
  declare export default class Goods extends Alaska$Model<Goods> {
  _id: string | number | Object | any;
  title: string;
  brief: string;
  pic: Object;
  pics: Object[];
  cats: Object[];
  brand: Object;
  newGoods: boolean;
  hotGoods: boolean;
  seoTitle: string;
  seoKeywords: string;
  seoDescription: string;
  currency: any;
  price: number;
  discount: number;
  discountStartAt: Date;
  discountEndAt: Date;
  shipping: number;
  inventory: number;
  volume: number;
  sort: number;
  activated: boolean;
  props: Object;
  propValues: Object[];
  skus: Object[];
  sku: Object;
  createdAt: Date;
  desc: string;
  preSave(): void;
  }
}

declare module 'alaska-goods/models/GoodsCat' {
  declare export default class GoodsCat extends Alaska$Model<GoodsCat> {
  _id: string | number | Object | any;
  title: string;
  icon: Object;
  pic: Object;
  desc: string;
  parent: Object;
  subCats: Object;
  sort: number;
  createdAt: Date;
  preSave(): void;
  postSave(): void;
  postRemove(): void;
  subs(): any;
  allSubs(): Object;
  parents(): Object[];
  }
}

declare module 'alaska-goods/models/GoodsProp' {
  declare export default class GoodsProp extends Alaska$Model<GoodsProp> {
  _id: string | number | Object | any;
  title: string;
  cats: Object;
  catsIndex: any;
  common: boolean;
  required: boolean;
  multi: boolean;
  sku: boolean;
  filter: boolean;
  input: boolean;
  checkbox: boolean;
  switch: boolean;
  sort: number;
  help: string;
  values: Object[];
  activated: boolean;
  createdAt: Date;
  valueEditor: string;
  preSave(): void;
  preRemove(): void;
  updateCatsIndex(): void;
  }
}

declare module 'alaska-goods/models/GoodsPropValue' {
  declare export default class GoodsPropValue extends Alaska$Model<GoodsPropValue> {
  _id: string | number | Object | any;
  title: string;
  prop: Object;
  cats: Object;
  catsIndex: any;
  common: boolean;
  sort: number;
  createdAt: Date;
  preSave(): void;
  postSave(): void;
  postRemove(): void;
  processProp(): void;
  updateCatsIndex(): void;
  }
}

declare module 'alaska-goods/models/Sku' {
  declare export default class Sku extends Alaska$Model<Sku> {
  pic: Object;
  goods: Object;
  key: string;
  desc: string;
  price: number;
  discount: number;
  inventory: number;
  volume: number;
  valid: boolean;
  props: Object;
  createdAt: Date;
  preSave(): void;
  }
}

declare module 'alaska-goods/models/Special' {
  declare export default class Special extends Alaska$Model<Special> {
  title: string;
  pic: Object;
  seoTitle: string;
  seoKeywords: string;
  seoDescription: string;
  goods: Object[];
  createdAt: Date;
  desc: string;
  preSave(): void;
  }
}

declare module 'alaska-goods/sleds/UpdatePropRef' {
  declare export default class UpdatePropRef extends Alaska$Sled {
  }

}

declare module 'alaska-goods/sleds/UpdateatRef' {
  declare export default class UpdateCatRef extends Alaska$Sled {
  }
}

