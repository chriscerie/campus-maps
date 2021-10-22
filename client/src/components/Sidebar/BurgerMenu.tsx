import { Box, SxProps } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

function BurgerMenu(props: { sx?: SxProps; onClick?: () => void }) {
    return (
        <Box className="burger-menu" sx={props.sx} onClick={props.onClick}>
            <MenuIcon />
        </Box>
    );
}

export default BurgerMenu;
