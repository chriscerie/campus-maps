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
        accessToken:
          'pk.eyJ1IjoiY2hyaXNjZXJpZSIsImEiOiJja3VvcXBiaGExcG5vMnFtYjhnc3gxcGprIn0.eX9g2ClfVBqYEvecwIPLYw', // Set the access token
        mapboxgl: mapInstance.map, // Set the mapbox-gl instance
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
