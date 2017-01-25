import { describe,it } from 'mocha'
import { expect } from 'chai'
import { changeAuthentication } from './authActions'
import { AUTH_CHANGE } from './authTypeActions'

describe('Auth actions creators', () => {
  it('should create a "AUTH_CHANGE" action', () => {
    const action = changeAuthentication(false)
    const expected = {
      type: AUTH_CHANGE,
      payload: false
    }

    expect(action).to.eql(expected)
  })
})
