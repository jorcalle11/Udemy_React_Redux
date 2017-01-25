import React from 'react'
import { describe,it } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import { mount } from 'enzyme'
import NavbarApp from './nav'

function config() {
  const props = {
    nameApp: 'testing app',
    isLoggedIn: false,
    changeAuthentication: () => {}
  }

  const wrapper = mount(<NavbarApp {...props} />)
  return { props, wrapper }
}

describe('Navbar component', () => {

  it('should to have a "nameApp" props', () => {
    const { props: { nameApp }, wrapper } = config()
    expect(wrapper.props().nameApp).to.equal(nameApp)
  })

  it('should render three "NavItem" component',() => {
    const { wrapper } = config()
    expect(wrapper.find('ul').children().length).to.equal(3)
  })

  it('should run the function when the button clicked',() => {
    const { wrapper } = config()
    const button = wrapper.find('Button').last()
    const changeAuthenticationMocked = sinon.spy()

    wrapper.setProps({changeAuthentication: changeAuthenticationMocked})
    expect(changeAuthenticationMocked.called).to.equal(false)

    button.simulate('click')
    expect(changeAuthenticationMocked.called).to.equal(true)
  })

})
