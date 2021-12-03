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
import './index.scss';

function LocationPage() {
  const { id } = useParams<{ id: string }>();
  const [locationInfo, setLocationInfo] = useState<null | LocationType>(null);
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);
  const isLargeScreen = useMediaQuery('(min-width:640px)');

  console.log(isLargeScreen);

  // Set point
  useEffect(() => {
    if (mapInstance) {
      getLocationInfo(id, mapInstance).then((res) => {
        if (res) {
          setLocationInfo(res);
        }
      });
    }
  }, [id, mapInstance]);

  return (
    <div className="location-page-container">
      <PhotoHeader
        name={locationInfo ? locationInfo.name : ''}
        type={locationInfo ? locationInfo.type : ''}
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
