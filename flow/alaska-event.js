declare module 'alaska-event' {
  declare class EventService extends Alaska$Service {
  }

  declare export default EventService;
}

declare module 'alaska-event/models/Event' {
  declare export default class Event extends Alaska$Model<Event> {
  _id: Object;
  title: string;
  pic: Object;
  user: Object;
  from?: Object;
  type: string;
  level: number;
  top: boolean;
  parent?: Event;
  info: Object;
  read: boolean;
  createdAt: Date;
  }
}
