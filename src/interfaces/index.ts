import React, { ImgHTMLAttributes, MouseEventHandler } from "react";

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
  content: string;
  deleteCommentHandle: (comment: string) => void;
}

export interface ISidebar {
  backgroundCoverImg: string;
  avatarImg: string;
}

export interface IAvatar extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder: boolean;
}
