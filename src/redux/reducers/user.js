import { LOGIN, LOGOUT } from '../actions/types';
import storage from 'redux-persist/lib/storage';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return action;
    case LOGOUT:
      storage.removeItem('root');
      return action.user = {};
    default:
      return state;
  }
}