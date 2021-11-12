import { Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import './PhotoHeader.scss';

function PhotoHeader({
  // TODO: change any type to LocationType
  name = '...',
  type = '...',
  id,
}: {
  name: string;
  type: string;
  id: string;
}) {
  return (
    <div className="location-page-container">
      <div className="photo-header-container">
        <Container className="photo-header-content-container">
          <div className="photo-header-content">
            <div className="photo-header-heading">{name}</div>
            <span className="photo-header-subheading">{type}</span>
            <Link to={`/loc-edit/${id}`} className="photo-header-edit-button">
              Edit
            </Link>
          </div>
          <Link to="/" id="see-more-button">
            See more photos
          </Link>
        </Container>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={0}
          className="images-list-container"
        >
          <img
            src="https://www.engineering.ucsb.edu/sites/engineering.ucsb.edu/files/images/ucsbengineeringmap.jpg"
            id="header-image"
            alt="Map"
          ></img>
          <img
            src="https://www.engineering.ucsb.edu/sites/engineering.ucsb.edu/files/images/ucsbengineeringmap.jpg"
            id="header-image"
            alt="Map"
          ></img>
          <img
            src="https://www.engineering.ucsb.edu/sites/engineering.ucsb.edu/files/images/ucsbengineeringmap.jpg"
            id="header-image"
            alt="Map"
          ></img>
        </Stack>
      </div>
    </div>
  );
}

export default PhotoHeader;
