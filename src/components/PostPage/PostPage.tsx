/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { type Post } from '@/types/types';


const PostPage: React.FC = () => {
  const { id: postID } = useParams();
  const [postInfo, setPostInfo] = useState<Post | null>(null);

  const request = async (): Promise<void> => {
    try {
      const { data } = await axios.get<Post[]>(`http://localhost:3000/posts/${postID}`);

      setPostInfo(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void request();
  }, []);
  console.log('###', postInfo);

  return (
    <div>
      <div className="posts__body" >
        <div className="posts__title"> {postInfo}</div>
        <div className="posts__description">{postInfo.body}</div>
        {/* <div className="posts__description">{postInfo.author.likes}</div> */}

        {/* <div className="posts__description">{new Date(postInfo.createdAt)}</div>
        <div className="posts__description">{new Date(postInfo.updatedAt)}</div> */}
      </div>
    </div>
  );
};

export default React.memo(PostPage);
