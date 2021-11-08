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
import axios from 'axios';

export type LocationType = {
  id: number;
  name: string;
  type: string;
  description: string;
  tile: {
    x: number;
    y: number;
    z: number;
  };
};

function LocationPage() {
  const { id } = useParams<{ id: string }>();
  const [selected, setSelected] = useState<null | LocationType>(null);
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);

  // Set point
  useEffect(() => {
    axios
      .get<LocationType>(`/api/v1/locations/loc/${id}`)
      .then((res) => {
        setSelected(res.data);
      })
      .catch((err) => {
        if (mapInstance) {
          const setSelectedPoint = () => {
            const points = mapInstance.querySourceFeatures('composite', {
              sourceLayer: 'poi_label',
            });

            const point = points.filter((point) => point.id == id)[0];

            if (point && point.properties) {
              // Request to create location data
              axios
                .post<LocationType>(`/api/v1/locations/loc/${id}`, {
                  id: point.id,
                  name: point.properties.name,
                  type: point.properties.category_en || point.properties.type,
                  // @ts-ignore
                  tile: point.tile,
                })
                .then((res) => {
                  setSelected(res.data);
                });
            }
          };

          if (mapInstance.isStyleLoaded()) {
            setSelectedPoint();
          } else {
            mapInstance.once('loaded', () => {
              setSelectedPoint();
            });
          }
        }
      });
  }, [id, mapInstance]);

  return (
    <div className="location-page-container">
      <PhotoHeader
        name={selected ? selected.name : ''}
        type={selected ? selected.type : ''}
      />

      <Container id="location-page-container-inner">
        <LeftColumnDetails />
        <RightColumnDetails />
      </Container>
    </div>
  );
}

export default LocationPage;
