import { createStore } from 'redux'
import rootReducer from '../reducer'

const configProd = createStore(
  rootReducer
)

export default configProd
