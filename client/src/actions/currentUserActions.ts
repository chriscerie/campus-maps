import axios from 'axios';
import { Dispatch } from 'redux';

// Null = not set yet
// False = not logged in
export type CurrentUserState =
  | null
  | false
  | {
      _id: string;
      first_name: string;
      last_name: string;
      email: string;
      profile_picture: string;
      account_type: 'User' | 'Admin';
      accounts: {
        google: {
          id: string;
        };
      };
      photos: Array<{ location_id: string; photo: string }>;
    };

export const currentUserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const setCurrentUser = () => {
  return (dispatch: Dispatch) => {
    axios
      .get<null | CurrentUserState>('/api/v1/users/current-user')
      .then((res) => {
        console.log(res.data);
        if (res.data && res.status === 200) {
          dispatch({
            type: currentUserActionTypes.SET_CURRENT_USER,
            payload: res.data,
          });
        } else {
          dispatch({
            type: currentUserActionTypes.SET_CURRENT_USER,
            payload: false,
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
          type: currentUserActionTypes.SET_CURRENT_USER,
          payload: false,
        });
      });
  };
};
