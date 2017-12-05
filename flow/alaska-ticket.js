import type User from 'alaska-user/models/User';

declare module 'alaska-ticket' {
  declare class TicketService extends Alaska$Service {
  }

  declare export default TicketService;
}

declare module 'alaska-ticket/models/Ticket' {
  declare export default class Ticket extends Alaska$Model {
  user: ?User;
  title: string;
  userId: string;
  sessionId: string;
  state: Object;
  result: Object;
  createdAt: Date;
  preSave(): void;
  verify(ctx: Alaska$Context): boolean;
  }
}
