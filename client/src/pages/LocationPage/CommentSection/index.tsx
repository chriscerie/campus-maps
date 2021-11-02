import { useState, useEffect } from 'react';
import { getComments as getCommentsApi } from './api';
import { CommentType } from './Comment';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = () => {
  const [backendComments, setBackendComments] = useState([]);
  const rootComments: Array<CommentType> = backendComments.filter(
    (backendComment: CommentType) => backendComment.parentId === null
  ); //root comments are comments with no parent (is not a reply)
  const getReplies = (commentId: string) => {
    return backendComments
      .filter(
        (backendComment: CommentType) => backendComment.parentId === commentId
      )
      .sort(
        (
          a: CommentType,
          b: CommentType //sort replies by most recent -> oldest
        ) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };
  const addComment = (text: string, parentId: string) => {
    console.log('addComment', text, parentId);
  };

  useEffect(() => {
    getCommentsApi().then((data: any) => {
      //returns array of comments from backend
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <div className="comments-container">
        {rootComments.map((rootComment: CommentType) => (
          <Comment
            comm={rootComment}
            replies={getReplies(rootComment.id)}
            key={rootComment.id}
          /> //key, comm, replies
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
