import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './SearchBar.scss';

function SearchBar() {
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);

  useEffect(() => {
    if (mapInstance) {
      const geocoder = new MapboxGeocoder({
        // Initialize the geocoder
        accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '',
        mapboxgl: mapInstance, // Set the mapbox-gl instance
        marker: false, // Do not use the default marker style
        placeholder: 'Search', // Placeholder text for the search bar
        trackProximity: true,
      });
      geocoder.addTo('#mapbox-geocoder-container');

      geocoder.on('result', (e) => {
        mapInstance.flyTo({
          center: e.result.geometry.coordinates,
          zoom: 16,
        });
      });

      return () => {
        mapInstance.removeControl(geocoder);
      };
    }
  }, [mapInstance]);

  return (
    <div
      id="mapbox-geocoder-container"
      style={{ display: 'flex', flex: 'auto', boxSizing: 'border-box' }}
    />
  );
}

export default SearchBar;
