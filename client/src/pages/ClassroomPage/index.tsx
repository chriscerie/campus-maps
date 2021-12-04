/* eslint-disable eqeqeq */
import { Container } from '@mui/material';
import PhotoHeader from './PhotoHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LeftColumnDetails from './LeftColumnDetails';
import { getLocationInfo } from '../../api/LocationAPI';
import type { LocationType } from '../../types/LocationType';
import './index.scss';

function ClassroomPage() {
  const { id } = useParams<{ id: string }>();
  const [locationInfo, setLocationInfo] = useState<null | LocationType>(null);
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);
  var class_name;

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

  {
    locationInfo &&
      locationInfo.rooms.map((rooms) => {
        if (rooms.room_id === id) {
          class_name = rooms.room_name;
        }
      });
  }

  return (
    <div className="location-page-container">
      <PhotoHeader name={class_name ? class_name[0] : ''} id={id} />

      <Container id="location-page-container-inner">
        <LeftColumnDetails
          classroomInfo={class_name ? class_name[0] : ''}
          id={id}
        />
      </Container>
    </div>
  );
}

export default ClassroomPage;
