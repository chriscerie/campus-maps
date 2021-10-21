import { useRef, useEffect, useState } from 'react';
// Exclude mapboxgl transpilation - https://docs.mapbox.com/mapbox-gl-js/guides/install/#transpiling
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import { Map, MapLayerMouseEvent, Popup } from 'mapbox-gl';
import { Feature } from 'geojson';
import PopupSelected from './PopupSelected';
import './MapComponent.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2hyaXNjZXJpZSIsImEiOiJja3VvcXBiaGExcG5vMnFtYjhnc3gxcGprIn0.eX9g2ClfVBqYEvecwIPLYw';

function MapComponent() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<null | {
    feature: Feature;
    popup: Popup;
  }>(null);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current) {
      return;
    }

    const map: Map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/chriscerie/ckuua1bz9it4j18qxt0tyuf71',
      center: [-119.8462, 34.4132],
      zoom: 15.5,
    });

    // Navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // Geolocation control
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      }), 'bottom-right'
    );

    // Popup icon when user clicks on a point of interest
    map.on('click', 'poi-label', (e: MapLayerMouseEvent) => {
      if (e.features) {
        // To get name: features.properties.name
        const feature: Feature = e.features[0];

        if (feature.geometry.type === 'Point') {
          const popup: Popup = new mapboxgl.Popup({
            closeButton: false,
          })
            .setLngLat(feature.geometry.coordinates)
            .setHTML('')
            .addTo(map);

          popup.on('close', () => {
            setSelected(null);
          });

          setSelected({
            feature: feature,
            popup: popup,
          });
        }
      }
    });

    map.on('mouseenter', 'poi-label', (_e: MapLayerMouseEvent) => {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'poi-label', (_e: MapLayerMouseEvent) => {
      map.getCanvas().style.cursor = 'default';
    });

    map.getCanvas().style.cursor = 'default';

    // Start at user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        map.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
        });
      });
    }

    return () => map.remove();
  }, []);

  return (
    <div className="map-container" ref={mapContainerRef}>
      {selected && (
        <PopupSelected
          selected={selected.feature}
          removeSelection={() => {
            selected.popup.remove();
            setSelected(null);
          }}
        />
      )}
    </div>
  );
}

export default MapComponent;
