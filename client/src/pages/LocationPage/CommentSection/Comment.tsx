import './Comment.scss';

export type CommentType = {
  id: string;
  body: string;
  username: string;
  userId: string;
  parentId: string | null;
  createdAt: string;
};

const Comment = ({
  comm,
  replies,
}: {
  comm: CommentType;
  replies: Array<CommentType>;
}) => {
  console.log(comm);
  return (
    <div className="comment">
      <div className="comment-image-container">
        <img src="../user-icon.png" alt="" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comm.username}</div>
          <div>{comm.createdAt}</div>
        </div>
        <div className="comment-text">{comm.body}</div>
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply: CommentType) => (
              <Comment comm={reply} key={reply.id} replies={[]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
