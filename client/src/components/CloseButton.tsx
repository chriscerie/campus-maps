import CloseIcon from '@mui/icons-material/Close';
import { Box, SxProps } from '@mui/system';
import './CloseButton.scss';

function CloseButton(props: { sx?: SxProps; onClick?: () => void }) {
  return (
    <Box className="close-button" sx={props.sx} onClick={props.onClick}>
      <CloseIcon />
    </Box>
  );
}

export default CloseButton;
