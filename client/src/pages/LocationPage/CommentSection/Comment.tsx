import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import './Comment.scss';

export type CommentType = {
  id: string;
  body: string;
  username: string;
  userId: string;
  createdAt: string;
  photo: string;
};

const Comment = ({ comm }: { comm: CommentType }) => {
  console.log(comm);
  return (
    <li className="comment-container">
      <div className="comment-header-container">
        <div className="comment-header-leftside">
          <div className="comment-header-leftside-body">
            <div className="comment-profile-image-container">
              <img
                src={comm.photo}
                alt="profile"
                className="comment-profile-image"
              />
            </div>
            <div className="comment-user-info-container">
              <div className="comment-user-info">{comm.username}</div>
              <div className="comment-date">{comm.createdAt}</div>
            </div>
          </div>
        </div>
        <div className="comment-header-rightside">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <div className="comment-text-container">
        <p className="comment-text">{comm.body}</p>
      </div>
    </li>
  );
};

export default Comment;
