import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router,browserHistory } from 'react-router'
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import store from './store/index'

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
