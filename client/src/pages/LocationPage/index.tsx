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
import Footer from '../../components/Footer';
import axios from 'axios';
import type { LocationType } from '../../types/LocationType';

function LocationPage() {
  const { id } = useParams<{ id: string }>();
  const [locationInfo, setLocationInfo] = useState<null | LocationType>(null);
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);

  // Set point
  useEffect(() => {
    axios
      .get<LocationType>(`/api/v1/locations/loc/${id}`)
      .then((res) => {
        setLocationInfo(res.data);
      })
      .catch((err) => {
        if (mapInstance) {
          const createLocationInfo = () => {
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
                  setLocationInfo(res.data);
                });
            }
          };

          if (mapInstance.isStyleLoaded()) {
            createLocationInfo();
          } else {
            mapInstance.once('loaded', () => {
              createLocationInfo();
            });
          }
        }
      });
  }, [id, mapInstance]);

  return (
    <div className="location-page-container">
      <PhotoHeader
        name={locationInfo ? locationInfo.name : ''}
        type={locationInfo ? locationInfo.type : ''}
      />

      <Container id="location-page-container-inner">
        {locationInfo && <LeftColumnDetails locationInfo={locationInfo} />}
        <RightColumnDetails />
      </Container>
      <Footer />
    </div>
  );
}

export default LocationPage;
