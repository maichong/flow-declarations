declare module 'alaska-menu' {
  declare class MenuService extends Alaska$Service {
  }

  declare export default MenuService;
}
declare module 'alaska-menu/models/Menu' {
  declare export default class Menu extends Alaska$Model {
  _id: String | number | Object | any;
  title: string;
  items: Object;
  createdAt: Date;
  }
}
