import { Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import './PhotoHeader.scss';

function PhotoHeader({
  name = '...',
  type = '...',
  photos = [],
  id,
}: {
  name: string;
  type: string;
  photos: Array<{ imageSrc: string; file: File }>;
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
          <Link to={`/loc/${id}/photos`} id="see-more-button">
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
          {photos.map((photo) => (
            <img src={photo.imageSrc} alt={photo.file.name} id="header-image" />
          ))}
          <img alt="ucsb" id="header-image-placeholder" />
          <img alt="ucsb" id="header-image-placeholder" />
          <img alt="ucsb" id="header-image-placeholder" />
        </Stack>
      </div>
    </div>
  );
}

export default PhotoHeader;
