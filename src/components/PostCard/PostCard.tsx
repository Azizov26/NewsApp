import React from 'react';
import { useNavigate } from 'react-router-dom';
import { type PostShort } from '@/types/types';


const PostCard: React.FC<PostShort> = ({ id, body, title }) => {
  const router = useNavigate();

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const onClick = (): void => { router(`/posts/${id}`); };

  return (
    <div onClick={onClick}>
      <div className="posts__body">
        <div className="posts__title"> {title}</div>
        <div className="posts__description">{body}</div>
      </div>
    </div>
  );
};

export default React.memo(PostCard);
