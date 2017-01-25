import { describe,it } from 'mocha'
import { expect } from 'chai'
import { createStore } from 'redux'
import rootReducer from '../reducer'
import { addUser } from '../user/userActions'

describe('Store', () => {
  it('should handle creating user', () => {
    const store = createStore(rootReducer)
    const user = {id:1, name: 'Jorge',website:'dsf@ag.co'}
    const action = addUser(user)
    store.dispatch(action)

    const current = store.getState().users[0]
    expect(current).to.equal(user)
  })
})
