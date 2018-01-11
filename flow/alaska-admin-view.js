import type { DependsQueryExpression } from 'check-depends';
import type { ImmutableObject, ImmutableArray } from 'seamless-immutable';

declare type Alaska$view$Field$Cell$Props = {
  +model: Alaska$view$Model,
  +field: Alaska$view$Field,
  +value: any
}

declare type Alaska$view$Field$Filter$Props = {
  +className: string,
  +value: string | number | boolean,
  +field: Alaska$view$Field,
  +onChange: Function,
  +onClose: Function,
}

declare type Alaska$view$Field$View$Props = {
  +className: string,
  +model: Alaska$view$Model,
  +field: Alaska$view$Field,
  +record: Object,
  +errorText: string,
  +disabled: boolean,
  +value: any,
  +onChange: Function,
}

declare type Alaska$view$Preview$Props = {
  +model: Alaska$view$Model,
  +columnList: Alaska$view$Field[],
  +record: Alaska$view$Record,
  +selected: boolean
}

declare type Alaska$view$Login = {
  +errorMsg: '',
  +show: boolean
}

declare type Alaska$view$User = {
  +access: boolean,
  +id: string,
  +username: string,
  +displayName: string,
  +avatar: string,
  +createdAt: string
}

declare type Alaska$view$Field = {
  +label: string,
  +path: string,
  +required?: boolean,
  +cell: string,
  +view: string,
  +filter: string,
  +plain: string,
  +default?: any,
  +group?: string,
  +ability?: string,
  +super?: DependsQueryExpression,
  +hidden?: DependsQueryExpression,
  +depends?: DependsQueryExpression,
  +disabled?: DependsQueryExpression,
  +help?: string,

  // layout
  +fixed?: boolean,
  +horizontal?: boolean,
  +nolabel?: boolean,
  // fields
  // relationship
  +filters?: Object,
  +model?: string,
  // select
  +options?: Alaska$SelectField$option[],
  +multi?: boolean,
  +after?: string,
  // date
  +format?: string,
  +cellFormat?: string,
  +dateFormat?: string,
  +timeFormat?: string,
  // number
  +max?: number,
  +min?: number,
  // balance
  +unit?: string,
  +size?: number,
  +precision?: number,
  // image
  +allowed?: string[],
  +target?: string,
  +thumbSuffix?: string,
  +defaultImage?: string,
  +upload?: {
    service: string,
    model: string,
    path: string,
    leaveConfirm: string
  },
}

declare type Alaska$view$Model = {
  +modelName: string, // User
  +id: string, // user
  +path: string, // alaska-user.User
  +key: string, // alaska-user.user
  +label: string,
  +serviceId: string,
  +preview?: string,
  +titleField: string,
  +defaultSort: string,
  +defaultColumns: string[],
  +searchFields: string[],
  +groups: {
    [key: string]: Alaska$FieldGroup
  },
  +relationships: Alaska$Model$relationships,
  +actions: Alaska$Model$actions,
  +nocreate?: boolean,
  +noupdate?: boolean,
  +noremove?: boolean,
  +fields: {
    [path: string]: Alaska$view$Field
  },
  +abilities: {
    [ability: string]: true
  }
}

declare type Alaska$view$Service = {
  id: string, // alaska-user
  prefix: string,
  api: boolean,
  models: {
    [modelName: string]: Alaska$view$Model
  }
}

declare type Alaska$view$Record = {
  _id: any,
  [field: string]: any
}

declare type Alaska$view$RecordList = {
  +key: string,
  +total: number,
  +page: number,
  +limit: number,
  +totalPage: number,
  +previous: number,
  +next: number,
  +error: string,
  +results: ImmutableArray<Alaska$view$Record>
}

declare type Alaska$view$Menu = {
  +id: string,
  +label: string,
  +icon: string,
  +type: string,
  +link: string,
  +service: string,
  +sort: number,
  +activated: boolean
}

declare type Alaska$view$Settings = {
  +superMode: boolean,
  +abilities: {
    [ability: string]: true
  },
  +currencies: {
    [cur: string]: {}
  },
  +services: {
    [serviceId: string]: Alaska$view$Service
  },
  +models: {
    [key: string]: Alaska$view$Model
  },
  +locale: string,
  +locales: {
    [serviceId: string]: {
      [local: string]: {
        [key: string]: string
      }
    }
  },
  +menu: Alaska$view$Menu[],
}

declare type Alaska$view$details = {
  [modelKey: string]: {
    [id: string]: Alaska$view$Record
  }
}

declare type Alaska$view$lists = {
  [key: string]: Alaska$view$RecordList
}

declare type Alaska$view$save = {
  +error: null | { message: string, code?: string | number },
  +fetching: boolean,
  +key: string,
  +_r: number,
  +data?: ImmutableObject<Alaska$view$Record> | ImmutableArray<Alaska$view$Record>,
  +res?: ImmutableObject<Alaska$view$Record> | ImmutableArray<Alaska$view$Record>
}

declare type Alaska$view$StoreState = {
  +layout: 'full' | 'icon',
  +login: ImmutableObject<Alaska$view$Login>,
  +user: ImmutableObject<Alaska$view$User>,
  +settings: Alaska$view$Settings,
  +lists: ImmutableObject<Alaska$view$lists>,
  +details: ImmutableObject<Alaska$view$details>,
  +save: ImmutableObject<Alaska$view$save>
}

declare type Alaska$view$Views = {
  [name: string]: React$Component<any, any>,
  wrappers: {
    [name: string]: Array<React$Component<any, any>>
  },
  routes: Array<{
    component: Array<React$Component<any, any>>,
    path: string,
  }>,
  navs: Array<React$Component<any, any>>
}

declare type Alaska$view$match<P> = {
  isExact: boolean,
  params: P,
  path: string,
  url: string,
}

declare type Alaska$view$location = {
  pathname: string,
  search: string,
  hash: string,
  state?: string,
}

declare type Alaska$view$history = {
  length: number,
  action: string,
  location: Alaska$view$location,
  push: (path: string, state?: string) => void,
  replace: (path: string, state?: string) => void,
  go: (n: number) => void,
  goBack: () => void,
  goForward: () => void,
  block: (prompt: string) => void
};

declare interface Alaska$view$ReduxAction<T, P> {
  type: T;
  payload: P
}

declare module 'alaska-admin-view' {
  declare export var api: Akita$Client;
  declare export var store: Object;
  declare export var App: Class<React$Component<Object, Object>>;
}
declare module 'alaska-admin-view/redux/details' {
  declare export var LOAD_DETAILS: 'LOAD_DETAILS';
  declare export var APPLY_DETAILS: 'APPLY_DETAILS';
  declare export var BATCH_APPLY_DETAILS: 'BATCH_APPLY_DETAILS';
  declare export var CLEAR_DETAILS: 'CLEAR_DETAILS';
  declare export var BATCH_CLEAR_DETAILS: 'BATCH_CLEAR_DETAILS';

  declare type clearDetailsPayload = { key: string, ids?: string[] };

  declare export function clearDetails(item: clearDetailsPayload): Alaska$view$ReduxAction<'CLEAR_DETAILS', clearDetailsPayload>;

  declare type batchClearDetailsPayload = clearDetailsPayload[];

  declare export function batchClearDetails(list: batchClearDetailsPayload): Alaska$view$ReduxAction<'BATCH_CLEAR_DETAILS', batchClearDetailsPayload>;

  declare type loadDetailsPayload = { service: string, model: string, key: string, id: string };

  declare export function loadDetails(item: loadDetailsPayload): Alaska$view$ReduxAction<'LOAD_DETAILS', loadDetailsPayload>;

  declare type applyDetailsPayload = { key: string, data: Object };

  declare export function applyDetails(key: string, data: Object): Alaska$view$ReduxAction<'APPLY_DETAILS', applyDetailsPayload>;

  declare type batchApplyDetailsPayload = Array<applyDetailsPayload>;

  declare export function batchApplyDetails(list: batchApplyDetailsPayload): Alaska$view$ReduxAction<'BATCH_APPLY_DETAILS', batchApplyDetailsPayload>;

}

declare module 'alaska-admin-view/redux/lists' {
  declare export var CLEAR_LIST: 'CLEAR_LIST';
  declare export var LOAD_LIST: 'LOAD_LIST';
  declare export var APPLY_LIST: 'APPLY_LIST';

  declare type clearListPayload = { key?: string };

  declare export function clearList(key?: string): Alaska$view$ReduxAction<'CLEAR_LIST', clearListPayload>;

  declare type loadListPayload = {
    service: string,
    model: string,
    key: string,
    page?: number,
    filters?: Object,
    search?: string,
    sort?: string
  };

  declare export function loadList(options: loadListPayload): Alaska$view$ReduxAction<'LOAD_LIST', loadListPayload>;

  declare type applyListPayload = Alaska$view$RecordList & { key: string };

  declare export function applyList(key: string, res: Alaska$view$RecordList): Alaska$view$ReduxAction<'LOAD_LIST', applyListPayload>;
}

declare module 'alaska-admin-view/redux/layout' {
  declare export var APPLY_LAYOUT: 'APPLY_LAYOUT';

  declare type LAYOUT = 'icon' | 'full' | 'hidden';

  declare export function applyLayout(layout: LAYOUT): Alaska$view$ReduxAction<'APPLY_LAYOUT', LAYOUT>;
}

declare module 'alaska-admin-view/redux/save' {
  declare export var SAVE: 'SAVE';

  declare type saveOptions = {
    service: string,
    model: string,
    key: string,
    sort?: string,
    _r: any
  };

  declare type savePayload = saveOptions & {
    data: Object | Object[]
  }

  declare export function save(options: saveOptions, data: Object | Object[]): Alaska$view$ReduxAction<'SAVE', savePayload>;
}

declare module 'alaska-admin-view/views/FilterEditor' {
  declare export default class FilterEditor extends React$Component<Object> {
  }
}
