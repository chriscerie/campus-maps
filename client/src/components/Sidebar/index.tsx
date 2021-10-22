import { Button, Container, Divider, Paper } from '@mui/material';
import { Box, SxProps } from '@mui/system';
import { Feature } from 'geojson';
import './Sidebar.scss'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import BurgerMenu from './BurgerMenu';


function Sidebar() {
  return (
    <Box className = "side-nav">    
        <List>
          {['Settings', 'Login'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
              {index % 2 === 0 ? <SettingsIcon /> : <LoginIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
 
       </Box>
    
  );
}

export default Sidebar;
