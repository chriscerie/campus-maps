import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2hyaXNjZXJpZSIsImEiOiJja3VvcXBiaGExcG5vMnFtYjhnc3gxcGprIn0.eX9g2ClfVBqYEvecwIPLYw';

function Map() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current) {
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    // Navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;
