import React from 'react'
import { describe,it } from 'mocha'
import { mount } from 'enzyme'
import { expect } from 'chai'
import UserItem from './userItem'

const config = () => {
  let props = {
    user: {id: 1, name: 'Jorge Calle', website: 'jmc@org.com'}
  }
  let output = mount(<UserItem {...props} />)

  return { props, output }
}

describe('UserItem component', () => {
  it('should to have a descendant component ListGroupItem with text "Jorge Calle"',() => {
    const { output, props: {user} } = config()
    const wrapper = output
    expect(wrapper).to.have.descendants('ListGroupItem')
    expect(wrapper.find('ListGroupItem').text()).to.contain(user.name)
  })

  it('should to have user prop', () => {
    const { output } = config()
    const wrapper = output
    expect(wrapper).to.have.prop('user')
  })

  it('should to render website property in span tag with class "label-info"', () => {
    const { output, props : { user } } = config()
    const wrapper = output
    expect(wrapper.find('.label-info')).to.have.tagName('span')
    expect(wrapper.find('.label-info').text()).to.equal(user.website)
  })
})

