import { describe,it } from 'mocha'
import { expect } from 'chai'
import authReducer from './authReducers'
import {changeAuthentication} from './authActions'

describe('Auth reducer', () => {
  it('should return the initial state', () => {
    const newState = authReducer(undefined,{})
    expect(newState).to.equal(false)
  })

  it('should return "true" when passed "AUTH_CHANGE" action in "true"', () => {
    const action = changeAuthentication(true)
    const newState = authReducer(false,action)
    expect(newState).to.equal(true)
  })
})
