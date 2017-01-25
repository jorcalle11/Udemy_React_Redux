import React from 'react'
import { describe,it } from 'mocha'
import sinon from 'sinon'
import { mount } from 'enzyme'
import { expect } from 'chai'
import { UsersList } from './userList'

const config = () => {
  let props = {
    users: [
      {id: 1, name: 'Jorge Calle', website: 'sadasd'},
      {id: 2, name: 'Maria Benitez', website: 'sadassdd'},
      {id: 3, name: 'Jamito Sierra', website: 'sadasdrt'},
      {id: 4, name: 'Juaquin Hernandez', website: 'sadasddfdf'},
    ],
    fetchUsers: () => {}
  }
  let output = mount(<UsersList {...props} />)

  return { props, output }
}

describe('UsersList component', () => {
  it('should to have props', () => {
    const { output } = config()
    const wrapper = output
    expect(wrapper.props().fetchUsers).to.be.a('function')
    expect(wrapper.props().users).to.be.a('array')
  })

  it('should to render four UserItem Components', () => {
    const {output, props: {users} } = config()
    const wrapper = output
    expect(wrapper.find('UserItem').length).to.equal(users.length)
  })

  it('should to call once a fetchUsers function in the lifecycle method "componentWillMount"',() => {
    const fetchUsersSpy = sinon.spy()
    const wrapper = mount(<UsersList users={[]} fetchUsers={fetchUsersSpy} />)
    expect(fetchUsersSpy.calledOnce).to.be.true
  })
})
