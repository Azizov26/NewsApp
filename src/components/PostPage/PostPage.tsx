/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import './postpage.scss';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { type Post } from '@/types/types';


const PostPage: React.FC = () => {
  const { postID } = useParams();
  const [postInfo, setPostInfo] = useState<Post | undefined>(undefined);

  const request = async (): Promise<void> => {
    try {
      const { data } = await axios.get<Post>(`http://localhost:3000/posts/${postID}`);

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
      <div className="page">
        <>
          <div className="page__section">
            <div className="page__title">{postInfo.title}</div>
            <div className="page__description">
              <div className="page__description-id">{postInfo.id}</div>
              <div className="page__description-body">{postInfo.body}</div>
            </div>
          </div>

          <div className="page__section">
            <div className="page__user">
              <div className="page__user-name">{postInfo.author.name}</div>
              <div className="page__user-mail">{postInfo.author.email}</div>
            </div>
          </div>

          <div className="page__section">
            <div className="page__time">
              <div className="page__time-createdAt">{postInfo.createdAt}</div>
              <div className="page__time-updatedAt">{postInfo.updatedAt}</div>
            </div>

          </div>

        </>
      </div>
    </div>
  );
};

export default React.memo(PostPage);
