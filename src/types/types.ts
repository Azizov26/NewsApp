
export type Post = {
  id: number;
  title: string;
  body: string | number;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
    email: string;
  };
  rating: {
    likes: number;
    dislikes: number;
  };
};

export type PostShort = Pick<Post, 'id' | 'title' | 'body' >;
