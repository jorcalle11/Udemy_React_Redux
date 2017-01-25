import React from 'react'
import { describe,it } from 'mocha'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import FooterApp from './footer'

describe('FooterApp component', () => {
  it('should to have css class named "credits"', () => {
    const wrapper = shallow(<FooterApp/>)
    expect(wrapper.hasClass('credits'))
  })

  it('should to have a code tag with text "Jorge Calle"', () => {
    const wrapper = shallow(<FooterApp/>)
    expect(wrapper.find('code'))
    expect(wrapper.find('code').text()).to.equal('Jorge Calle')    
  })
})
