import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router,browserHistory } from 'react-router'
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import store from './store/index'
import { getToken } from './auth/helpers'
import { AUTH_SUCCESS } from './auth/authTypeActions'
import {currentUser} from './auth/authActions'

// check if user already authenticated
if (getToken()) {
  store.dispatch({ type: AUTH_SUCCESS })
  store.dispatch(currentUser())
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
