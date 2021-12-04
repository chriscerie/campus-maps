import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import type { ReviewType } from '../../../types/ReviewType';
import { useState, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../reducers';
import { Fragment } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import './Review.scss';

const Review = ({
  comm,
  setComments,
}: {
  comm: ReviewType;
  setComments: () => void;
}) => {
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
          {currentUser &&
            (currentUser.account_type === 'Admin' ||
              currentUser._id === comm.author_id) && (
              <Fragment>
                <div className="review-header-rightside">
                  <IconButton onClick={handleClick}>
                    <MoreHorizIcon />
                  </IconButton>
                </div>
                <Menu
                  anchorEl={anchorEl}
                  open={anchorEl !== null}
                  onClose={handleClose}
                  onClick={handleClose}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem
                    onClick={() => {
                      axios.delete(`/api/v1/review/${comm._id}`).then(() => {
                        setComments();
                      });
                    }}
                  >
                    Delete
                  </MenuItem>
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
