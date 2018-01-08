declare module 'alaska-admin' {
  declare class AdminService extends Alaska$Service {
  }

  declare export default AdminService
}

declare module 'alaska-admin/models/AdminMenu' {
  declare export default class AdminMenu extends Alaska$Model {
  label: string;
  icon: string;
  type: string;
  parent: Object;
  service: string;
  sort: number;
  super: boolean;
  activated: boolean;
  }
}

declare module 'alaska-admin/sleds/Init' {
  declare export default class Init extends Alaska$Sled {
  }
}

declare module 'alaska-admin/sleds/RegisterMenu' {
  declare export default class RegisterMenu extends Alaska$Sled {
  }
}
