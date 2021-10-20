import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl, { Map } from 'mapbox-gl';
import { useEffect } from 'react';

function SearchBar(props: { map: Map }) {
  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: props.map, // Set the mapbox-gl instance
      marker: false, // Do not use the default marker style
      placeholder: 'Search for places in Berkeley', // Placeholder text for the search bar
      bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
      proximity: {
        longitude: -122.25948,
        latitude: 37.87221,
      }, // Coordinates of UC Berkeley
    });
  }, [props.map]);

  return null;
}

export default SearchBar;
