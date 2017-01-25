import React from 'react'
import { describe,it } from 'mocha'
import { expect } from 'chai'
import { mount } from 'enzyme'
import NavContainer from './navContainer'
import {Provider} from 'react-redux'
import configMockStore from 'redux-mock-store'

const mockStore = configMockStore([])

const config = () => {
  const state = { authenticated: false, users: [] }
  const store = mockStore(state)
  const navbarSelector = 'NavbarApp'
  const output = mount(
    <Provider store={store}>
      <NavContainer/>
    </Provider>
  )
  const wrapper = output.find(navbarSelector)

  return {state, wrapper}
}

describe('Navbar container', () => {

  it('map "isLoggedIn" to props', () => {
    const { wrapper } = config()
    expect(wrapper.props().isLoggedIn).to.equal(false)
  })

  it('map "changeAuthentication" action to props', () => {
    const { wrapper } = config()
    expect(wrapper.props().changeAuthentication).to.be.a('function')
  })
})
