import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import type { UserType } from '../../../types/UserType';
import './Review.scss';

export type ReviewType = {
  _id: string;
  author_id: string;
  body: string;
  liked_by: Array<string>;
  created_at: string;
  author?: UserType;
};

const Review = ({ comm }: { comm: ReviewType }) => {
  console.log(comm);
  console.log(comm.author);
  return (
    <li className="review-container">
      <div className="review-header-container">
        <div className="review-header-leftside">
          <div className="review-header-leftside-body">
            <div className="review-profile-image-container">
              <img
                src={comm.author ? comm.author.profile_picture : ''}
                alt="profile"
                className="review-profile-image"
              />
            </div>
            <div className="review-user-info-container">
              <div className="review-user-info">
                {comm.author ? comm.author.first_name : 'Unknown'}
              </div>
              <div>{comm.created_at}</div>
            </div>
          </div>
        </div>
        <div className="review-header-rightside">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <div className="review-text-container">
        <p className="review-text">{comm.body}</p>
      </div>
    </li>
  );
};

export default Review;
