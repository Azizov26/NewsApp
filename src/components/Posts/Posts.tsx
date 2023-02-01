import './posts.scss';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { type PostShort } from '@/types/types';
import PostCard from '../PostCard/PostCard';


const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostShort[]>([]);

  const fetchPosts = async (): Promise<void> => {
    try {
      const { data } = await axios.get<PostShort[]>('http://localhost:3000/posts');

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
          <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
        </>
      ))}
    </div>


  );
};

export default Posts;
