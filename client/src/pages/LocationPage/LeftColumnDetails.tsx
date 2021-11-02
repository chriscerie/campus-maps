import CommentSection from './CommentSection';
import LocationSection from './LocationSection';
import './LeftColumnDetails.scss';
import { Button } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function LeftColumnDetais() {
  return (
    <div id="location-page-left-column">
      <div id="location-page-left-buttons-container">
        <td className="location-page-left-button">
          <Button
            variant="contained"
            disableElevation
            startIcon={<ChatOutlinedIcon />}
            sx={{ textTransform: 'none', fontSize: '1em' }}
          >
            Write a comment
          </Button>
        </td>
        <td className="location-page-left-button">
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<CameraAltOutlinedIcon />}
            sx={{ textTransform: 'none', fontSize: '1em' }}
          >
            Add Photo
          </Button>
        </td>
        <td className="location-page-left-button">
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<ScreenShareOutlinedIcon />}
            sx={{ textTransform: 'none', fontSize: '1em' }}
          >
            Share
          </Button>
        </td>
        <td className="location-page-left-button">
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<BookmarkBorderOutlinedIcon />}
            sx={{ textTransform: 'none', fontSize: '1em' }}
          >
            Save
          </Button>
        </td>
      </div>

      <LocationSection title="Details">
        <div className="building-info align-text-left">
          <p style={{ margin: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan, purus at eleifend ornare, libero metus tincidunt velit,
            quis tincidunt nisl eros non tellus. Nunc ullamcorper porttitor
            risus, eu luctus justo auctor sed. Vestibulum ornare eros est, in
            tempus massa congue ut. Duis eu fringilla nulla, nec mattis ex.
            Quisque viverra justo a luctus feugiat. Aliquam erat volutpat.
            Nullam varius odio ex, non aliquet eros tristique ullamcorper. Donec
            dignissim nisl dui, in sollicitudin magna faucibus eu. Duis porta
            ornare erat, ut lacinia lacus volutpat id. Suspendisse potenti.
            Suspendisse et iaculis velit.
          </p>
        </div>
      </LocationSection>

      <LocationSection title="Comments">
        <div className="align-text-left">
          <CommentSection />
          <CommentSection />
          <CommentSection />
        </div>
      </LocationSection>
    </div>
  );
}

export default LeftColumnDetais;
