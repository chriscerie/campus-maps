import { useRef, useEffect } from 'react';
// Exclude mapboxgl transpilation - https://docs.mapbox.com/mapbox-gl-js/guides/install/#transpiling
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import { Map, MapLayerMouseEvent, Popup } from 'mapbox-gl';
import { Feature } from 'geojson';
import PopupSelected from './PopupSelected';
import Sidebar from '../../components/Sidebar';
import './MapComponent.scss';
import { useLocation } from 'react-router-dom';
import { setMapInstance, setSelectedLocation } from '../../actions/mapActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2hyaXNjZXJpZSIsImEiOiJja3VvcXBiaGExcG5vMnFtYjhnc3gxcGprIn0.eX9g2ClfVBqYEvecwIPLYw';

function MapComponent() {
  const location = useLocation();
  const selectedLocation = useSelector(
    (state: RootState) => state.mapInstance.selectedLocation
  );
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

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
    dispatch(setMapInstance(map));
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
      }),
      'bottom-right'
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
            dispatch(setSelectedLocation(null));
          });

          dispatch(
            setSelectedLocation({
              feature: feature,
              popup: popup,
            })
          );
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
  }, [dispatch]);

  return (
    <div
      className="map-container"
      ref={mapContainerRef}
      // Only render map if user is in root page
      style={
        location.pathname === '/' ? {} : { visibility: 'hidden', height: 0 }
      }
    >
      <Sidebar />
      {selectedLocation && (
        <PopupSelected
          selected={selectedLocation.feature}
          removeSelection={() => {
            selectedLocation.popup.remove();
            dispatch(setSelectedLocation(null));
          }}
        />
      )}
    </div>
  );
}

export default MapComponent;
