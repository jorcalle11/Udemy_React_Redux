import axios from 'axios'
export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const GET_POST = 'GET_POST'
export const DELETE_POST = 'DELETE_POST'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=asd1234'

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export const createPost = (post) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,post)
  
  return {
    type: CREATE_POST,
    payload: request
  }
}

export const getPost = postId => {
  const request = axios.get(`${ROOT_URL}/posts/${postId}${API_KEY}`)

  return {
    type: GET_POST,
    payload: request
  }
}

export const deletePost = postId => {
  const request = axios.delete(`${ROOT_URL}/posts/${postId}${API_KEY}`)

  return {
    type: DELETE_POST,
    payload: request
  }
}
