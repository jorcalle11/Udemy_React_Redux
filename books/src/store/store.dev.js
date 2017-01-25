import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import books from '../reducers';

const storeDev = createStore(
  books,
  composeWithDevTools()
)

export default storeDev