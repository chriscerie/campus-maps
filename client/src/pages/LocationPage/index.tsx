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
import Footer from '../../components/footer';

function LocationPage() {
  const { id } = useParams<{ id: string }>();
  const [selected, setSelected] =
    useState<null | mapboxgl.MapboxGeoJSONFeature>(null);
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);

  // Set point
  useEffect(() => {
    if (mapInstance) {
      const setSelectedPoint = () => {
        const points = mapInstance.querySourceFeatures('composite', {
          sourceLayer: 'poi_label',
        });

        setSelected(points.filter((point) => point.id == id)[0]);
      };

      if (mapInstance.isStyleLoaded()) {
        setSelectedPoint();
      } else {
        mapInstance.once('loaded', () => {
          setSelectedPoint();
        });
      }
    }
  }, [id, mapInstance]);

  console.log(selected);

  return (
    <div className="location-page-container">
      <PhotoHeader selected={selected} />

      <Container id="location-page-container-inner">
        <LeftColumnDetails />
        <RightColumnDetails />
      </Container>
      <Footer/>
    </div>
  );
}

export default LocationPage;
