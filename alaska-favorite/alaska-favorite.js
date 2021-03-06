declare module 'alaska-favorite' {
  declare class FavoriteService extends Alaska$Service {
  }

  declare export default FavoriteService;
}

declare module 'alaska-favorite/models/Favorite' {
  declare export default class Favorite extends Alaska$Model<Favorite> {
  title: string;
  pic: Object;
  user: Object;
  type: Object;
  target: string;
  createdAt: Date;
  }
}
