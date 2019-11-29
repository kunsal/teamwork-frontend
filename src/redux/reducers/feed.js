import { SAVE_FEED } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_FEED:
      return action.feed;
    default:
      return state;
  }
}