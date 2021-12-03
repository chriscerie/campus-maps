import { Avatar } from '@mui/material';
import { useState, MouseEvent } from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../../reducers';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import './ProfileIcon.scss';

function ProfileIcon() {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {currentUser && currentUser.account_type === 'Admin' ? (
        <Fragment>
          <Avatar
            alt={currentUser ? currentUser.first_name : ''}
            src={currentUser ? currentUser.profile_picture : ''}
            className="profile-icon-container"
            onClick={handleClick}
          />
          <Menu
            anchorEl={anchorEl}
            open={anchorEl !== null}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              {/* TODO: Replace avatar with profile icon */}
              <Avatar />
              <Link to="/profile" className="menu-item-link">
                My Profile
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              <Link to="/" className="menu-item-link">
                Settings
              </Link>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              <Link to="/moderation" className="menu-item-link">
                Moderation
              </Link>
            </MenuItem>
            <MenuItem
              onClick={() => {
                axios.post('/api/v1/auth/logout');
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Fragment>
      ) : (
        <Fragment>
          <Avatar
            alt={currentUser ? currentUser.first_name : ''}
            src={currentUser ? currentUser.profile_picture : ''}
            className="profile-icon-container"
            onClick={handleClick}
          />
          <Menu
            anchorEl={anchorEl}
            open={anchorEl !== null}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              {/* TODO: Replace avatar with profile icon */}
              <Avatar />
              <Link to="/profile" className="menu-item-link">
                My Profile
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              <Link to="/" className="menu-item-link">
                Settings
              </Link>
            </MenuItem>
            <MenuItem
              onClick={() => {
                axios.post('/api/v1/auth/logout');
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Fragment>
      )}
    </div>
  );
}
export default ProfileIcon;
