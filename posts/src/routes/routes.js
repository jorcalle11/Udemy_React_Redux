import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import PostIndex from '../containers/PostIndex'
import PostNew from '../components/PostNew/PostNew'
import PostDetail from '../components/PostDetail'
import NotFound from '../components/NotFound'
import CountryList from '../components/countries/CountryList'
import { onFetchPostsEnter,onFetchCountriesEnter } from './loadData'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} onEnter={onFetchPostsEnter}></IndexRoute>
    <Route path="posts/new" component={PostNew}/>
    <Route path="posts/:postId" component={PostDetail}/>
    <Route path="countries" component={CountryList} onEnter={onFetchCountriesEnter} />
    <Route path="*" component={NotFound}></Route>
  </Route>
)
