import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
// Exclude mapboxgl transpilation - https://docs.mapbox.com/mapbox-gl-js/guides/install/#transpiling
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import { Popup } from 'mapbox-gl';
import { Feature } from 'geojson';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { setSelectedLocation } from '../../actions/mapActions';
import './SearchBar.scss';

function SearchBar() {
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mapInstance) {
      const geocoder = new MapboxGeocoder({
        // Initialize the geocoder
        accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '',
        mapboxgl: mapInstance, // Set the mapbox-gl instance
        marker: false, // Do not use the default marker style
        placeholder: 'Search', // Placeholder text for the search bar
        trackProximity: true,
        types: 'place, poi, address',
      });

      const setProximity = () => {
        const center = mapInstance.getCenter().wrap();
        geocoder.setProximity({ longitude: center.lng, latitude: center.lat });
      };

      mapInstance.on('load', setProximity);
      mapInstance.on('moveend', setProximity);

      geocoder.addTo('#mapbox-geocoder-container');

      //axios.get('https://api.mapbox.com/v4/').then(res => {

      const features = mapInstance.querySourceFeatures('composite', {
        sourceLayer: 'poi_label',
      });

      mapInstance.on('sourcedata', () => {
        console.log(mapInstance.getStyle());
        const points = mapInstance.querySourceFeatures('composite', {
          sourceLayer: 'poi_label',
        });
        console.log(points);
      });

      geocoder.on('result', (e) => {
        console.log(e);

        const feature = e.result[0];

        mapInstance.flyTo({
          center: e.result.geometry.coordinates,
          zoom: 16,
        });

        /*
        if (feature.geometry.type === 'Point') {
          const popup: Popup = new mapboxgl.Popup({
            closeButton: false,
          })
            .setLngLat(feature.geometry.coordinates)
            .setHTML('')
            .addTo(mapInstance);

          dispatch(setSelectedLocation({
            feature: feature,
            popup: popup,
          }));
        }
        */
      });

      return () => {
        mapInstance.removeControl(geocoder);
      };
    }
  }, [dispatch, mapInstance]);

  return (
    <div
      id="mapbox-geocoder-container"
      style={{ display: 'flex', flex: 'auto', boxSizing: 'border-box' }}
    />
  );
}

export default SearchBar;
