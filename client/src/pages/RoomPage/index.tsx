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

function RoomPage() {
  const { id, room_id } = useParams<{ id: string; room_id: string }>();
  const [roomInfo, setRoomInfo] = useState<null | { room_name: string }>(null);
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);

  // Set point
  useEffect(() => {
    if (mapInstance) {
      getLocationInfo(id, mapInstance).then((res) => {
        if (res) {
          // Get room_name that matches room_id
          const room_name = res.rooms.find((room) => room.room_id === room_id);
          if (room_name) {
            setRoomInfo({ room_name: room_name.room_name });
          }
        }
      });
    }
  }, [id, mapInstance, room_id]);

  return (
    <div className="location-page-container">
      <PhotoHeader name={roomInfo?.room_name || ''} id={id} />

      <Container id="location-page-container-inner">
        <LeftColumnDetails classroomInfo={roomInfo?.room_name || ''} id={id} />
      </Container>
    </div>
  );
}

export default RoomPage;
