import axios from 'axios';
import { Dispatch } from 'redux';

export type CurrentUserState = null | {
  first_name: string;
  last_name: string;
  email: string;
  profile_picture: string;
  accounts: {
    google: {
      id: string;
    };
  };
};

export const currentUserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const setCurrentUser = () => {
  return (dispatch: Dispatch) => {
    axios
      .get<any>('/api/v1/current-user')
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          dispatch({
            type: currentUserActionTypes.SET_CURRENT_USER,
            payload: res.data,
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
