/**
 * 脉冲软件
 * http://maichong.it
 * @Created by Rong on 2017/12/14.
 * @author Rong <chaorong@maichong.it>
 */

declare type ObjectModel = {
  id: string,
  project: string,
  library: string,
  version: string,
  title: string,
  desc: string,
  share: boolean
}

declare type Field = {
  id: string,
  library: string,
  version: string,
  ref: string,
  refId: string,
  title: string,
  sort: number,
  type: string,
  default: string,
  mock: string,
  mockResult: string,
  desc: string
}

declare type Tuple = {
  id: string,
  project: string,
  library: string,
  version: string,
  title: string,
  desc: string,
  share: boolean
}

declare type Scope = {
  id: string,
  library: string,
  version: string,
  object: string,
  title: string,
  fields: ApiField[]
}

declare type Route = {
  library: string,
  version: string,
  title: string,
  desc: string,
  stability: string,
  since: string,
  group: string,
  method: string,
  path: string,
  bodyType: string,
  sort: number
}

declare type Group = {
  id: string,
  library: string,
  version: string,
  title: string,
  desc: string,
  sort: number
}

declare type MapGroup = Group & {
  route: Array<Route>
}

declare type Response = {
  id: string,
  library: string,
  version: string,
  route: string,
  code: number,
  desc: string,
  type: {} | void
}

declare type Description = {
  id: string,
  library: string,
  version: string,
  title: string,
  desc: number,
  sort: number
}

declare type Code = {
  id: string,
  library: string,
  version: string,
  desc: number,
  code: string
}

//根据Field的type类型获取的简单模型
declare type SimpleModel = {
  modelType: string, //模型的类型
  modelTitle: string, //模型的title
  fieldType: string, //字段的类型
  hasFields: boolean //是否有字段数组
}

//对Field的层级关系处理
declare type ModelField = Field & SimpleModel & {
  children:Object|Tuple|Scope & {fields: Array<ModelField>}
}

declare module 'restdoc' {
  declare class ApiInfo {
    groups: Array<Group>,
    routes: Array<Route>,
    descriptions: Array<Description>,
    objects: Array<ObjectModel>,
    tuples: Array<Tuple>,
    codes: Array<Code>,
    fields: Array<Field>,
    scopes: Array<Scope>,
    responses: Array<Response>,
    menuBaseUrl: string,
    className?: string,
    isDownload?: boolean,
    callBackComponentUpdate?: Function|null, //报告父级组件已更新，等待父级判断是否还需要更新
    shouldComponentUpdate?: boolean //是否需要更新组件 shouldComponentUpdate
  }
  declare var exports: Class<ApiInfo>;
}
