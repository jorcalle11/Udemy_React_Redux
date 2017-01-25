import store from '../store'
import { fetchCountries } from '../actions/countries'
import {fetchPosts} from '../actions/posts.action'

export const onFetchCountriesEnter = () => {
  store.dispatch(fetchCountries())
}

export const onFetchPostsEnter = () => {
  store.dispatch(fetchPosts())
}
