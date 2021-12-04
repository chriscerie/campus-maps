/* eslint-disable eqeqeq */
import { Container } from '@mui/material';
import PhotoHeader from './PhotoHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LeftColumnDetails from './LeftColumnDetails';
import RightColumnDetails from './RightColumnDetails';
import { getLocationInfo } from '../../api/LocationAPI';
import type { LocationType } from '../../types/LocationType';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getFilesFromBase64 } from '../../api/GetBase64';
import './index.scss';

function LocationPage() {
  const { id } = useParams<{ id: string }>();
  const [locationInfo, setLocationInfo] = useState<null | LocationType>(null);
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);
  const isLargeScreen = useMediaQuery('(min-width:640px)');
  const [photos, setPhotos] = useState<Array<{ imageSrc: string; file: File }>>(
    []
  );

  // Set point
  useEffect(() => {
    if (mapInstance) {
      getLocationInfo(id, mapInstance).then((res) => {
        if (res) {
          setLocationInfo(res);

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
  }, [id, mapInstance]);

  return (
    <div className="location-page-container">
      <PhotoHeader
        name={locationInfo ? locationInfo.name : ''}
        type={locationInfo ? locationInfo.type : ''}
        photos={photos}
        id={id}
      />

      <Container id="location-page-container-inner">
        <LeftColumnDetails locationInfo={locationInfo} id={id} />
        {isLargeScreen && <RightColumnDetails locationInfo={locationInfo} />}
      </Container>
    </div>
  );
}

export default LocationPage;
