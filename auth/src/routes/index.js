import React from 'react'
import { Route,IndexRoute } from 'react-router'
import App from '../components/app'
import UsersList from '../user/userList/userList'
import Resources from '../components/resources/resources'
import requireAuth from '../auth/requireAuth'
import SignIn from '../auth/signIn/signIn'
import SignUp from '../auth/signUp/signUp'
import signOut from '../auth/signOut/signOut'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={UsersList} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signout" component={signOut} />
    <Route path="resources" component={requireAuth(Resources)} />
  </Route>
)

