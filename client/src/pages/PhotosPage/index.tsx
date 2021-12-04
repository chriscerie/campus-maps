/* eslint-disable eqeqeq */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { RootState } from '../../reducers';
import { Button } from '@mui/material';
import PhotoBox from './PhotoBox';
import { PhotoType } from './PhotoBox';
import { getLocationInfo } from '../../api/LocationAPI';
import { getFilesFromBase64 } from '../../api/GetBase64';
import type { LocationType } from '../../types/LocationType';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PhotoPopup from '../../components/PhotoPopup';
import './index.scss';

function PhotosPage() {
  const { id } = useParams<{ id: string }>();
  //const [backendPhotos, setBackendPhotos] = useState<Array<PhotoType>>([]);
  const [locationInfo, setLocationInfo] = useState<null | LocationType>(null);
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);
  const [photos, setPhotos] = useState<Array<{ imageSrc: string; file: File }>>(
    []
  );
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(-1);

  useEffect(() => {
    if (mapInstance) {
      getLocationInfo(id, mapInstance).then((res) => {
        if (res) {
          setLocationInfo(res);

          // Set photos
          getFilesFromBase64(
            res.photos.map((photo) => {
              return photo.photo;
            })
          ).then((photos) => {
            setPhotos(photos);
          });
        }
      });
    }
  }, [id, mapInstance, setPhotos]);

  //temporary photos for testing
  const backendPhotos: PhotoType[] = new Array<PhotoType>();

  for (let i = 0; i < 1; i++) {
    backendPhotos.push({
      _id: '1',
      user_id: 'J',
      photo_src:
        'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
      photo_link:
        '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
    });
  }

  return (
    <div className="photos-page-container">
      <div className="header-container">
        <div className="subheader-container">
          <Link
            to={`/loc/${id}`}
            style={{ textDecoration: 'none', color: '#000' }}
          >
            <h1 className="subheader-title">
              {locationInfo && locationInfo.name}
            </h1>
          </Link>
          <div className="add-photo-button">
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
        </div>
      </div>
      <div className="photos-grid-container">
        <ul className="photos-grid">
          {photos.map((currentPhoto, index) => (
            <PhotoBox
              photoSrc={currentPhoto.imageSrc}
              onClick={() => {
                setSelectedPhotoIndex(index);
              }}
            />
          ))}
        </ul>
      </div>
      <PhotoPopup
        photos={photos}
        index={selectedPhotoIndex}
        setIndex={setSelectedPhotoIndex}
        onClose={(e) => {
          setSelectedPhotoIndex(-1);
        }}
      />
    </div>
  );
}

export default PhotosPage;
