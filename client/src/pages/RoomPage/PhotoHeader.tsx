import { Container, Stack } from '@mui/material';
import './PhotoHeader.scss';

function PhotoHeader({
  // TODO: change any type to LocationType
  name = '...',
  id,
}: {
  name: string;
  id: string;
}) {
  return (
    <div className="location-page-container">
      <div className="photo-header-container">
        <Container className="photo-header-content-container">
          <div className="photo-header-content">
            <div className="photo-header-heading">{name}</div>
          </div>
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
