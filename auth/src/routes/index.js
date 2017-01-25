import React from 'react'
import { Route,IndexRoute } from 'react-router'
import App from '../components/app'
import UsersList from '../user/userList/userList'
import Resources from '../components/resources/resources'
import requireAuth from '../auth/requireAuth'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={UsersList} />
    <Route path="resources" component={requireAuth(Resources)} />
  </Route>
)

