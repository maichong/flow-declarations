declare module 'alaska-feedback' {
  declare class FeedbackService extends Alaska$Service {
  }

  declare export default FeedbackService;
}
declare module 'alaska-feedback/models/Feedback' {
  declare export default class Feedback extends Alaska$Model {
  title: string;
  user: Object;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  lastComment: Object;
  newComment(): void;
  preSave(): void;
  }
}
declare module 'alaska-feedback/models/FeedbackComment' {
  declare export default class FeedbackComment extends Alaska$Model {
  feedback: Object;
  user: Object;
  createdAt: Date;
  fromAdmin: boolean;
  content: string;
  preSave(): void;
  }
}
