import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, SxProps } from '@mui/system';


function SideArrow(props: { sx?: SxProps; onClick?: () => void }) {
    return (
        <Box className="side-arrow-left" sx={props.sx} onClick={props.onClick}>
            <ChevronLeftIcon />
        </Box>
    );
}

export default SideArrow;
