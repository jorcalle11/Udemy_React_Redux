import { AUTH_CHANGE } from './authTypeActions'

const authReducer = (state = false, action) => {
  switch (action.type) {
  case AUTH_CHANGE:
    return action.payload
  default:
    return state
  }
}

export default authReducer
