/* eslint-disable eqeqeq */
import { Container } from '@mui/material';
import PhotoHeader from './PhotoHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { useParams } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import LeftColumnDetails from './LeftColumnDetails';
import RightColumnDetails from './RightColumnDetails';
import { getLocationInfo } from '../../api/LocationAPI';
import type { LocationType } from '../../types/LocationType';

function LocationPage() {
  const { id } = useParams<{ id: string }>();
  const [locationInfo, setLocationInfo] = useState<null | LocationType>(null);
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);

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
        {locationInfo && (
          <LeftColumnDetails locationInfo={locationInfo} id={id} />
        )}
        <RightColumnDetails />
      </Container>
    </div>
  );
}

export default LocationPage;
