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
        marker: true, // Do not use the default marker style
        placeholder: 'Search', // Placeholder text for the search bar
        trackProximity: true,
        types: 'place, poi, address',
      });
      geocoder.addTo('#mapbox-geocoder-container');

      const setProximity = () => {
        var center = mapInstance.getCenter().wrap();
        geocoder.setProximity({ longitude: center.lng, latitude: center.lat });
      };

      mapInstance.on('load', setProximity);
      mapInstance.on('moveend', setProximity);

      geocoder.on('result', (e) => {
        mapInstance.flyTo({
          center: e.result.geometry.coordinates,
          zoom: 17.5,
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
