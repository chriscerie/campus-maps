import { Reducer } from 'redux';
import { produce } from 'immer';
import { MapState, MapActionTypes } from '../actions/mapActions';

const initialState: MapState = {
  map: null,
  selectedLocation: null,
};

const mapInstance: Reducer<MapState> = (state = initialState, action) => {
  switch (action.type) {
    case MapActionTypes.SET_NEW_MAP:
      return produce(state, draft => {
        draft.map = action.payload.map;
      });
    case MapActionTypes.SET_SELECTED_LOCATION:
      return produce(state, draft => {
        draft.selectedLocation = action.payload.selectedLocation;
      });
    default:
      return state;
  }
};

export default mapInstance;
