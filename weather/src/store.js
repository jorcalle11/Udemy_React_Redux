import { applyMiddleware,createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import reducer from './reducers';

const logger = createLogger()

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(promise,logger)
  )
)

export default store