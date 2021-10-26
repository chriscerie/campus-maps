import { Map } from 'mapbox-gl';
import { Dispatch } from 'redux';

export type MapState = {
  map: null | Map;
};

export const MapActionTypes = {
  SET_NEW_MAP: 'SET_NEW_MAP',
};

export const setMapInstance = (newMap: any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: MapActionTypes.SET_NEW_MAP,
      payload: { map: newMap },
    });
  };
};
