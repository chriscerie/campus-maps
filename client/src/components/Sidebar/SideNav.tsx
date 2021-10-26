import SideArrowRight from './SideArrowRight';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';

function Sidenav(props: { onClick: () => void }) {
  return (
    <div className="sidebar">
      <SideArrowRight onClick={props.onClick} />

      <List className="items">
        {['Temp', 'Sidebar'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <SettingsIcon /> : <LoginIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
export default Sidenav;
