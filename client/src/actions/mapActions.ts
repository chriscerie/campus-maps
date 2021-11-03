import { Dispatch } from 'redux';

export type MapState = {
  map: any;
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

export const setSelected = (newSelected: any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: MapActionTypes.SET_NEW_SELECTED,
      payload: { selected: newSelected}
    })
  }
}