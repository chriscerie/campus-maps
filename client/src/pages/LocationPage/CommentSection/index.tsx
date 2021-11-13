import { useState, useEffect } from 'react';
import { getComments as getCommentsApi } from './api';
import { CommentType } from './Comment';
import Comment from './Comment';
import './index.scss';

const CommentSection = () => {
  const [backendComments, setBackendComments] = useState([]);

  useEffect(() => {
    getCommentsApi().then((data: any) => {
      //returns array of comments from backend
      setBackendComments(data);
    });
  }, []);

  return (
    <ul className="comment-section-container">
      {backendComments.map((rootComment: CommentType) => (
        <Comment comm={rootComment} key={rootComment.id} />
      ))}
    </ul>
  );
};

export default CommentSection;
