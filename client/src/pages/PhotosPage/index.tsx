/* eslint-disable eqeqeq */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { RootState } from '../../reducers';
import { Button } from '@mui/material';
import PhotoBox from './PhotoBox';
import { PhotoType } from './PhotoBox';
import { getLocationInfo } from '../../api/LocationAPI';
import type { LocationType } from '../../types/LocationType';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import './index.scss';

function PhotosPage() {
  const { id } = useParams<{ id: string }>();
  //const [backendPhotos, setBackendPhotos] = useState<Array<PhotoType>>([]);
  const [locationInfo, setLocationInfo] = useState<null | LocationType>(null);
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);

  useEffect(() => {
    if (mapInstance) {
      getLocationInfo(id, mapInstance).then((res) => {
        if (res) {
          setLocationInfo(res);
        }
      });
    }
  }, [id, mapInstance]);

  //temporary photos for testing
  const backendPhotos: PhotoType[] = new Array<PhotoType>();
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });
  backendPhotos.push({
    _id: '1',
    user_id: 'J',
    photo_src:
      'https://s3-media0.fl.yelpcdn.com/bphoto/jrsxTUcsuV6PDSQp50T-Cw/258s.jpg',
    photo_link:
      '/biz_photos/popping-yolk-cafe-hacienda-heights-2?select=jrsxTUcsuV6PDSQp50T-Cw',
  });

  return (
    <div className="photos-page-container">
      <div className="header-container">
        <h1 className="header-title">
          Photos for {locationInfo && locationInfo.name}
        </h1>
        <div className="subheader-container">
          <h3 className="subheader-title">
            {locationInfo && locationInfo.description}
          </h3>
          <div className="add-photo-button">
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<CameraAltOutlinedIcon />}
              sx={{ textTransform: 'none', fontSize: '1em' }}
            >
              Add Photo
            </Button>
          </div>
        </div>
      </div>
      <div className="photos-grid-container">
        <ul className="photos-grid">
          {backendPhotos.map((currentPhoto: PhotoType) => (
            <PhotoBox key={currentPhoto._id} photo={currentPhoto} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PhotosPage;
