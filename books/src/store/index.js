import storeDev from './store.dev';
import storeProd from './store.prod';

let store = storeDev

if (process.env.NODE_ENV === 'production') {
  store = storeProd
}

module.exports = store