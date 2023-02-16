/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { type PostShort } from '@/types/types';


const PostPage: React.FC = () => {
  const { postID } = useParams();
  const [postInfo, setPostInfo] = useState<PostShort | undefined>(undefined);

  const request = async (): Promise<void> => {
    try {
      const { data } = await axios.get<PostShort>(`http://localhost:3000/posts/${postID}`);

      setPostInfo(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void request();
  }, []);
  console.log('### postInfo', postInfo);

  if (postInfo === undefined) {
    return null;
  }

  return (
    <div>
      <div className="page__title">
        <>
          <div className="info__title">{postInfo.title}</div>;
          <div className="info__title">{postInfo.id}</div>;
          <div className="info__title">{postInfo.body}</div>;
        </>
      </div>
    </div>
  );
};

export default React.memo(PostPage);
