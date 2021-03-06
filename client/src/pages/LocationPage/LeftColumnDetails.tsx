import { Link } from 'react-router-dom';
import ReviewSection from './ReviewSection';
import LocationSection from './LocationSection';
import './LeftColumnDetails.scss';
import { Button } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import type { LocationType } from '../../types/LocationType';
import SharePopup from './SharePopup';
import { useState } from 'react';

function LeftColumnDetails({
  locationInfo,
  id,
}: {
  locationInfo: LocationType | null;
  id: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

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
          <Link
            to={`/write-review/${id}`}
            style={{ textDecoration: 'none', color: '#000' }}
          >
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<CameraAltOutlinedIcon />}
              sx={{ textTransform: 'none', fontSize: '1em' }}
            >
              Add Photo
            </Button>
          </Link>
        </div>
        <div className="location-page-left-button">
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleOpen}
            startIcon={<ScreenShareOutlinedIcon />}
            sx={{ textTransform: 'none', fontSize: '1em' }}
          >
            Share
          </Button>
          <SharePopup onClose={handleClose} isOpen={isOpen} />
        </div>
      </div>

      <LocationSection title="Description">
        <div className="building-info align-text-left">
          <p style={{ margin: 0 }}>
            {locationInfo && locationInfo.description}
          </p>
        </div>
      </LocationSection>

      <LocationSection title="Rooms">
        <div
          className="align-text-left"
          id="location-page-left-buttons-container"
        >
          {locationInfo &&
            locationInfo.rooms.map((room) => (
              <Link
                to={`/loc/${id}/${room.room_id}`}
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  margin: '0 1em 1em 0',
                }}
              >
                <Button
                  variant="outlined"
                  color="inherit"
                  sx={{ textTransform: 'none', fontSize: '1em' }}
                >
                  {room.room_name}
                </Button>
              </Link>
            ))}
        </div>
      </LocationSection>

      <LocationSection title="Reviews">
        <div className="align-text-left">
          <ReviewSection id={id} />
        </div>
      </LocationSection>
    </div>
  );
}

export default LeftColumnDetails;
