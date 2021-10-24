import { Avatar } from '@mui/material';
import { useState, MouseEvent } from 'react';
import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import type { CurrentUserState } from '../../actions/currentUserActions';

import { Link } from 'react-router-dom';
import './AccountMenu.scss';


function AccountMenu(props: { currentUser: CurrentUserState }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Fragment>
            <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    {props.currentUser ? (
                        <Avatar
                            alt={props.currentUser.name}
                            src={props.currentUser.photo}
                            className="profile-icon-container"
                            sx={{ width: 40, height: 40 }}
                        />
                    ) : (
                        <Avatar
                            className="profile-icon-container"
                            sx={{ width: 40, height: 40 }}
                        > ?
                        </Avatar>
                    )}
                </IconButton>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
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
                    <Avatar /> <Link to="/" className="menu-item-link"> My Profile </Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    <Link to="/" className="menu-item-link"> Settings </Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    <Link to="/api/logout" className="menu-item-link"> Logout </Link>
                </MenuItem>
            </Menu>
        </Fragment>
    );
}
export default AccountMenu;