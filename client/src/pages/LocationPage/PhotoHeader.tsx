import { Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import './PhotoHeader.scss';
import CloseButton from '../../components/CloseButton';

function PhotoHeader() {
  return (
    <div className="location-page-container">
      <div className="photo-header-container">
        <Link to="/">
          <CloseButton
            sx={{
              position: 'absolute',
              right: 25,
              top: 25
            }}
          />
        </Link>
        <Container className="photo-header-content-container">
          <div className="photo-header-content">
            <div className="photo-header-heading">Phelps Hall
            </div>
            <div className="photo-header-subheading">University Building</div>
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
