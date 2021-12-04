import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import type { ReviewType } from '../../../types/ReviewType';
import './Review.scss';
import { useState, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../reducers';
import { Fragment } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Review = ({ comm }: { comm: ReviewType }) => {
  console.log(comm);
  console.log(comm.author);
  const currentUser = useSelector((state: RootState) => state.currentUser);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          {currentUser && currentUser.account_type === 'Admin' && (
            <Fragment>
              <button onClick={handleClick}>
                <MoreHorizIcon />
              </button>
              <Menu
                anchorEl={anchorEl}
                open={anchorEl !== null}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>Delete</MenuItem>
              </Menu>
            </Fragment>
          )}
        </div>
      </div>
      <div className="review-text-container">
        <p className="review-text">{comm.body}</p>
      </div>
    </li>
  );
};

export default Review;
