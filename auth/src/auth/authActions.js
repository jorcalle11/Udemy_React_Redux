import axios from 'axios'
import { browserHistory } from 'react-router'
import { API_AUTH } from '../constants'
import { saveToken,removeToken,headerWithAuthorization } from './helpers'
import {
  AUTH_REQUEST,
  AUTH_SUCCESS, 
  AUTH_ERROR, 
  LOGOUT, 
  CURRENT_USER
} from './authTypeActions'

function authRequest() {
  return {
    type: AUTH_REQUEST
  }
}

function authSuccess() {
  return {
    type: AUTH_SUCCESS
  }
}

function authError(err) {
  return {
    type: AUTH_ERROR,
    payload: err
  }
}

function getCurrentUser(user) {
  return {
    type: CURRENT_USER,
    payload: user
  }
}

function login(email,password) {
  const url = `${API_AUTH}/api/auth/signin`
  return dispatch => {
    dispatch(authRequest())
    return axios.post(url,{email,password})
      .then(({data}) => {
        dispatch(authSuccess())
        saveToken(data.token)
        dispatch(currentUser())
        browserHistory.push('/resources')
      })
      .catch(() => dispatch(authError('Incorrect user or password')))
  }
}

function logout() {
  removeToken()
  browserHistory.push('/')

  return {
    type: LOGOUT
  }
}

function signUp(email,password) {
  const url = `${API_AUTH}/api/auth/signup`
  return dispatch => {
    dispatch(authRequest())
    return axios.post(url,{email,password})
      .then(({data}) => {
        dispatch(authSuccess())
        saveToken(data.token)
        dispatch(currentUser())
        browserHistory.push('/resources')
      })
      .catch(() => dispatch(authError('Email already exist')))
  }
}

function currentUser() {
  const url = `${API_AUTH}/me`
  return dispatch => {
    return axios.get(url,headerWithAuthorization())
      .then(({data}) => dispatch(getCurrentUser(data)))
      .catch(() => dispatch(authError('require auth')))
  }  
}

export {
  currentUser,
  login,
  signUp,
  logout
}
