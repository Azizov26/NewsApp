
export type Post = {
  id: number;
  title: string;
  body: string | number;
  createdAt: string;
  updatedAt: string;
  author: {
    id: number;
    name: string;
    mail: string;
  };
  rating: {
    likes: number;
    dislikes: number;
  };
  postID?: number;
  children?: JSX.Element | JSX.Element[];

};

export type PostShort = Pick<Post, 'id' | 'title' | 'body'>;
