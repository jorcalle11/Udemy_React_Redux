import { combineReducers } from 'redux'
import userReducer from '../user/userReducers'
import authReducer from '../auth/authReducers'
import {reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  form: formReducer
})

export default rootReducer
