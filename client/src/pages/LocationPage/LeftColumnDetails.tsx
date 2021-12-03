import { Link } from 'react-router-dom';
import ReviewSection from './ReviewSection';
import LocationSection from './LocationSection';
import './LeftColumnDetails.scss';
import { Button } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import type { LocationType } from '../../types/LocationType';

function LeftColumnDetais({
  locationInfo,
  id,
}: {
  locationInfo: LocationType | null;
  id: string;
}) {
  return (
    <div id="location-page-left-column">
      <div id="location-page-left-buttons-container">
        <div className="location-page-left-button">
          <Link
            to={`/write-review/${locationInfo && locationInfo.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              disableElevation
              startIcon={<ChatOutlinedIcon />}
              sx={{ textTransform: 'none', fontSize: '1em' }}
            >
              Write a Review
            </Button>
          </Link>
        </div>
        <div className="location-page-left-button">
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<CameraAltOutlinedIcon />}
            sx={{ textTransform: 'none', fontSize: '1em' }}
          >
            Add Photo
          </Button>
        </div>
        <div className="location-page-left-button">
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<ScreenShareOutlinedIcon />}
            sx={{ textTransform: 'none', fontSize: '1em' }}
          >
            Share
          </Button>
        </div>
        <div className="location-page-left-button">
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<BookmarkBorderOutlinedIcon />}
            sx={{ textTransform: 'none', fontSize: '1em' }}
          >
            Save
          </Button>
        </div>
      </div>

      <LocationSection title="Description">
        <div className="building-info align-text-left">
          <p style={{ margin: 0 }}>
            {locationInfo && locationInfo.description}
          </p>
        </div>
      </LocationSection>

      <LocationSection title="Comments">
        <div className="align-text-left">
          <ReviewSection id={id} />
        </div>
      </LocationSection>
    </div>
  );
}

export default LeftColumnDetais;
