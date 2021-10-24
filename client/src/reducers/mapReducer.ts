import { Reducer } from 'redux';
import { MapState, MapActionTypes } from '../actions/mapActions';

const initialState: MapState = {
  map: null,
};

const mapInstance: Reducer<MapState> = (state = initialState, action) => {
  switch (action.type) {
    case MapActionTypes.SET_NEW_MAP:
      return action.payload;
    default:
      return state;
  }
};

export default mapInstance;
