
import { createStore } from 'redux'
import reducer from '../reducers'

const configProd = createStore(
  reducer
)

export default configProd