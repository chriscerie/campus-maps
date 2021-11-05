import type { Map, Popup } from 'mapbox-gl';
import type { Feature } from 'geojson';
import { Dispatch } from 'redux';

export type MapState = {
  map: null | Map;
  selectedLocation: null | {
    feature: Feature;
    popup: Popup;
  };
};

export const MapActionTypes = {
  SET_NEW_MAP: 'SET_NEW_MAP',
  SET_SELECTED_LOCATION: 'SET_SELECTED_LOCATION',
};

export const setMapInstance = (newMap: MapState['map']) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: MapActionTypes.SET_NEW_MAP,
      payload: { map: newMap },
    });
  };
};

export const setSelectedLocation = (
  newSelectedLocation: MapState['selectedLocation']
) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: MapActionTypes.SET_SELECTED_LOCATION,
      payload: { selectedLocation: newSelectedLocation },
    });
  };
};
