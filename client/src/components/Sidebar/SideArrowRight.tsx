import { Box, SxProps } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function SideArrowRight(props: { sx?: SxProps; onClick: () => void }) {
    return (
        <div className="side-arrow-right" onClick={props.onClick}>
            <ChevronRightIcon />
        </div>
    );
}

export default SideArrowRight;
