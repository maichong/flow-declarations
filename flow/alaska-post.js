import type User from 'alaska-user/models/User';

declare module 'alaska-post' {
  declare class PostService extends Alaska$Service {
  }

  declare export default PostService;
}

declare module 'alaska-post/models/Post' {
  declare export default class Post extends Alaska$Model<Post> {
  title: string;
  user: User;
  cat: Object;
  cats: Object[];
  seoTitle: string;
  seoKeywords: string;
  seoDescription: string;
  summary: string;
  pic: Object;
  content: string;
  tags: Object[];
  source: string;
  commentCount: number;
  hots: number;
  recommend: boolean;
  relations: Object[];
  topics: Object[];
  createdAt: Date;
  preSave(): void;
  }
}

declare module 'alaska-post/models/PostCat' {
  declare export default class PostCat extends Alaska$Model<PostCat> {
  title: string;
  parent: Object;
  subCats: Object[];
  sort: number;
  createdAt: Date;
  preSave(): void;
  }
}

declare module 'alaska-post/models/PostComment' {
  declare export default class PostComment extends Alaska$Model<PostComment> {
  post: Object;
  topic: Object;
  user: User;
  content: string;
  commentTo: Object;
  agree: number;
  oppose: number;
  createdAt: Date;
  preSave(): void;
  }
}

declare module 'alaska-post/models/PostTag' {
  declare export default class PostTag extends Alaska$Model<PostTag> {
  title: string;
  createdAt: Date;
  preSave(): void;
  }
}

declare module 'alaska-post/models/PostTopic' {
  declare export default class PostTopic extends Alaska$Model<PostTopic> {
  title: string;
  pic: Object;
  summary: string;
  seoTitle: string;
  seoKeywords: string;
  seoDescription: string;
  commentCount: number;
  hots: number;
  template: string;
  createdAt: Date;
  preSave(): void;
  }
}
