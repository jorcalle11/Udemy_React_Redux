
import { applyMiddleware,createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducer/index'

const logger = new createLogger()

const configDev = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk,logger)
  )
)

export default configDev
