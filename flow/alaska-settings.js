import type Settings from 'alaska-settings/models/Settings';

declare module 'alaska-settings' {
  declare class SettingsService extends Alaska$Service {
    register(data: Object): Settings;
    get(id: string | number): any;
    set(id: string | number, value: any): any;
  }

  declare export default SettingsService;
}


declare module 'alaska-settings/models/Settings' {
  declare export default class Settings extends Alaska$Model<Settings> {
  _id: string | number | Object | any;
  title: string;
  service: string;
  group: string;
  value: Object;
  help: string;
  type: string;
  super: boolean;
  options: Object;
  }
}
