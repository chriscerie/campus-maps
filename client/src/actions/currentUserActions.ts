import axios from 'axios';
import { Dispatch } from 'redux';

export type CurrentUserState = null | {
  name: string;
  email: string;
  photo: string;
  googleId: string;
};

export const currentUserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const setCurrentUser = () => {
  return (dispatch: Dispatch) => {
    axios
      .get<any>('/api/current_user')
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          dispatch({
            type: currentUserActionTypes.SET_CURRENT_USER,
            payload: {
              name: res.data.name,
              email: res.data.email,
              photo: res.data.photo,
              googleId: res.data.googleId,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
