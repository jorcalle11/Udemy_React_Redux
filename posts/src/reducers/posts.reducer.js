import { FETCH_POSTS,GET_POST } from '../actions/posts.action'

const initialState = {all: [], current: null}

const postsReducer = (state= initialState, action) => {
  switch (action.type) {
  case GET_POST:
    return { ...state, current: action.payload.data }
  case FETCH_POSTS:
    return { ...state, all: action.payload.data }
  default:
    return state
  }
}

export default postsReducer
