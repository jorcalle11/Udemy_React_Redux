import axios from 'axios'
import { API_URL } from '../constants'
import {  
  ADD_USER,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypeActions.js'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = data => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data
  }
}

const fetchUsersFailure = err => {
  return {
    type: FETCH_USERS_FAILURE,
    err
  }
}

export const addUser = newUser => {
  return {
    type: ADD_USER,
    payload: newUser
  }
}

export const fetchUsers = () => {
  const request = axios.get(`${API_URL}/users`)

  return dispath => {
    dispath(fetchUsersRequest())
    return request
      .then(({ data }) => dispath(fetchUsersSuccess(data)))
      .catch(err => dispath(fetchUsersFailure(err)))
  }
}
