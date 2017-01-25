import { combineReducers } from 'redux';
import books from './books.reducer';
import bookSelected from './bookSelected.reducer';

const rootReducer = combineReducers({
  books,
  bookSelected
})

export default rootReducer