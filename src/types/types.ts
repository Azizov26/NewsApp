import { type ReactNode } from 'react';

export type Post = {
  id: number;
  title: string;
  body: string | number;
  // createdAt: string;
  // updatedAt: string;
  // author: {
  //   id: number;
  //   name: string;
  //   mail: string;
  // };
  // rating: {
  //   likes: number;
  //   dislikes: number;
  // };
  children?: ChildNode | undefined;
};

export type PostShort = Pick<Post, 'id' | 'title' | 'body' | 'children'>;
