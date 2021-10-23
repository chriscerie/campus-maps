import { combineReducers } from 'redux';
import userReducer from './currentUserReducer';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  currentUser: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = applyMiddleware(reduxThunk)(createStore)(rootReducer);

export default store;
