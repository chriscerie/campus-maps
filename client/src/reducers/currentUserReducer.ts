import { Reducer } from 'redux';
import {
  currentUserActionTypes,
  CurrentUserState,
} from '../actions/currentUserActions';

const initialState: CurrentUserState = null;

const currentUser: Reducer<CurrentUserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case currentUserActionTypes.SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
};

export default currentUser;
