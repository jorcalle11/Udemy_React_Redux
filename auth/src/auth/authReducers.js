import { CURRENT_USER,AUTH_SUCCESS,AUTH_ERROR,AUTH_REQUEST,LOGOUT } from './authTypeActions'

const initialState = {
  isLoggedIn: false,
  serverResponse: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case AUTH_REQUEST:
    return {...state, serverResponse: false }
  case AUTH_SUCCESS:
    return { ...state, isLoggedIn: true }
  case AUTH_ERROR:
    return {...state, error: action.payload, serverResponse:true }
  case CURRENT_USER:
    return {...state, currentUser: action.payload }
  case LOGOUT:
    return {...state, isLoggedIn: false }
  default:
    return state
  }
}

export default authReducer
