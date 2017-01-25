import { SELECT_BOOK } from '../actions';
import initialState from './initialState';

function bookSelected(state=initialState.bookSelected,action) {
  switch (action.type) {
    case SELECT_BOOK:
      return action.payload
    default:
      return state;
  }
}

export default bookSelected