import { createStore } from 'redux';
import books from '../reducers/books.reducer';

const storeProd = createStore(books)

export default storeProd