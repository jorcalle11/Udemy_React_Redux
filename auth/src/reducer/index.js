import { combineReducers } from 'redux'
import userReducer from '../user/userReducers'
import authReducer from '../auth/authReducers'

const rootReducer = combineReducers({
  users: userReducer,
  authenticated: authReducer
})

export default rootReducer
