/**
 * 脉冲软件
 * http://maichong.it
 * @Created by Rong on 2017/12/14.
 * @author Rong <chaorong@maichong.it>
 */

declare module 'restdoc' {
  declare interface ObjectModel {
    id: string,
    project: string,
    library: string,
    version: string,
    title: string,
    desc: string,
    share: boolean,
    createdAt: Date
  }

  declare interface Field {
    id: string,
    project: string,
    library: string,
    version: string,
    ref: string,
    refId: string,
    title: string,
    sort: number,
    type: string,
    default: any,
    mock: string,
    mockResult: string,
    desc: string,
    options: Object
  }

  declare interface Tuple {
    id: string,
    project: string,
    library: string,
    version: string,
    title: string,
    desc: string,
    share: boolean,
    createdAt: Date
  }

  declare interface Scope {
    id: string,
    project: string,
    library: string,
    version: string,
    object: string,
    title: string,
    fields: ApiField[],
    share: boolean,
    createdAt: Date
  }

  declare interface Route {
    id: string,
    library: string,
    version: string,
    title: string,
    desc: string,
    stability: string,
    since: string,
    state: string,
    group: string,
    method: string,
    path: string,
    bodyType: string,
    bodyDesc: string,
    sort: number
  }

  declare interface Group {
    id: string,
    library: string,
    version: string,
    title: string,
    desc: string,
    sort: number
  }

  declare interface MapGroup extends Group {
    route: Array<Route>
  }

  declare interface Response {
    id: string,
    library: string,
    version: string,
    route: string,
    code: number,
    desc: string,
    type: {} | void
  }

  declare interface Description {
    id: string,
    library: string,
    version: string,
    title: string,
    desc: number,
    sort: number
  }

  declare interface Code {
    id: string,
    library: string,
    version: string,
    desc: number,
    code: string,
    createdAt: Date
  }

  //根据Field的type类型获取的简单模型
  declare interface SimpleModel {
    modelType: string, //模型的类型
    modelTitle: string, //模型的title
    fieldType: string, //字段的类型
    hasFields: boolean //是否有字段数组
  }

  //对Field的层级关系处理
  declare interface ModelField extends Field, SimpleModel {
    children:ObjectModel|Tuple|Scope & { fields: Array<ModelField> }
  }
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
