import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Map } from 'mapbox-gl';
import { useEffect } from 'react';
import './SearchBar.scss';

function SearchBar(props: { map: Map }) {
  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      // Initialize the geocoder
      accessToken: 'pk.eyJ1IjoiY2hyaXNjZXJpZSIsImEiOiJja3VvcXBiaGExcG5vMnFtYjhnc3gxcGprIn0.eX9g2ClfVBqYEvecwIPLYw', // Set the access token
      mapboxgl: props.map, // Set the mapbox-gl instance
      marker: false, // Do not use the default marker style
      placeholder: 'Search', // Placeholder text for the search bar
    });
    props.map.addControl(geocoder, 'top-left');
  }, [props.map]);

  return null;
}

export default SearchBar;
