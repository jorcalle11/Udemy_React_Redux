import { describe,it } from 'mocha'
import { expect } from 'chai'
import thunk from 'redux-thunk'
import configMockStore from 'redux-mock-store'
import { addUser,fetchUsers } from './userActions'
import {
  ADD_USER,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS
} from './userTypeActions'

describe('Users actions creators', () => {
  it('should create a "ADD_USER" action', () => {
    const user = { id:45 ,name:'patricio', website: 'js@algo.co'}
    const expectedAction = {
      type: ADD_USER,
      payload: user
    }

    const action = addUser(user)
    expect(action).to.eql(expectedAction)
  })

  const middleware = [thunk]
  const mockStore = configMockStore(middleware) 

  describe('Async actions', function() {
    this.timeout(0)

    it('should create a "FETCH_USERS_REQUEST" and "FETCH_USERS_SUCCESS" when fetching users has been done', (done) => {
      const store = mockStore({ users:[] })

      store.dispatch(fetchUsers())
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.equal(FETCH_USERS_REQUEST)
          expect(actions[1].type).to.equal(FETCH_USERS_SUCCESS)
          done()
        })
    })
  })
})
