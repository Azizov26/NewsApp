import './posts.scss';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Post = {
  id: number;
  title: string;
  body: string | number;
};

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async (): Promise<void> => {
    try {
      const { data } = await axios.get<Post[]>('http://localhost:3000/posts');

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void fetchPosts();
  }, []);


  return (
    <div className="posts">
      {posts.map((post) => (
        <>
          <div className="posts__body" key={post.id} >
            <div className="posts__title"> {post.title}</div>
            <div className="posts__description">{post.body}</div>
          </div>
        </>
      ))}
    </div>


  );
};

export default Posts;
