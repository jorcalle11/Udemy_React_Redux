import { ADD_USER,FETCH_USERS_SUCCESS } from './userTypeActions'

const userReducer = (state = [], action) => {
  switch(action.type) {
  case FETCH_USERS_SUCCESS:
    return action.payload
  case ADD_USER:
    return [...state,action.payload ]
  default:
    return state
  }
}

export default userReducer
