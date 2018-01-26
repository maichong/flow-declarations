declare module 'alaska-user' {
  declare class UserService extends Alaska$Service {
  }

  declare export default UserService
}

declare module 'alaska-user/models/User' {
  declare export default class User extends Alaska$Model {
  username: string;
  email: string;
  password: string;
  avatar: Object;
  roles: Object[];
  abilities: Object[];
  createdAt: Date;
  displayName: string;

  auth(candidate: string): boolean;
  hasAbility(id: string): Promise<boolean>;
  }
}

declare module 'alaska-user/models/Ability' {
  declare export default class Ability extends Alaska$Model {
  _id: string;
  title: string;
  service: string;
  createdAt: Date;
  }
}

declare module 'alaska-user/models/Role' {
  declare export default class Role extends Alaska$Model {
  _id: string;
  title: string;
  abilities: Object[];
  sort: number;
  createdAt: Date;
  hasAbility(id: string | Object): Promise<boolean>
  }
}

declare module 'alaska-user/sleds/Init' {
  declare export default class Init extends Alaska$Sled {
  }
}

declare module 'alaska-user/sleds/Login' {
  declare export default class Login extends Alaska$Sled {
  }
}

declare module 'alaska-user/sleds/Logout' {
  declare export default class Logout extends Alaska$Sled {
  }
}

declare module 'alaska-user/sleds/Register' {
  declare export default class Register extends Alaska$Sled {
  }
}

declare module 'alaska-user/sleds/RegisterAbility' {
  declare export default class RegisterAbility extends Alaska$Sled {
  }
}

declare module 'alaska-user/sleds/RegisterRole' {
  declare export default class RegisterRole extends Alaska$Sled {
  }
}
