import { LOGIN } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return action;
    default:
      return state;
  }
}