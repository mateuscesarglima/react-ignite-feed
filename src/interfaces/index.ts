export interface IAuthor {
  avatarUrl: string;
  name: string;
  role: string;
}

export interface IPostContent {
  type: string;
  content: string;
}

export interface IPost {
  author: IAuthor;
  content: IPostContent[];
  publishedAt: Date;
}

export interface IComment {
  author: Omit<IAuthor, "role">;
  content: IPostContent;
  publishedAt: Date;
}

export interface ISidebar {
  backgroundCoverImg: string;
  avatarImg: string;
}

export interface IAvatar {
  img: string;
  hasBorder: boolean;
}
