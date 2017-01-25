import { describe,it } from 'mocha'
import { expect } from 'chai'
import userReducer from './userReducers'
import { addUser } from './userActions'

const config = () => {
  const initialState = [
    {id:1,name:'Jorge',website: 'jmc@alg.co'},
    {id:2,name:'Jaimito',website: 'sde@alg.co'},
    {id:3,name:'Nicole',website: 'axsd@alg.co'}      
  ]
  const newUser = {id:4, name: 'Maria', website: 'asd@fd.co'}

  return { initialState, newUser }
}

describe('User reducer', () => {
  it('should return the initial state', () => {
    const newState = userReducer(undefined,{})
    expect(newState).to.eql([])
  })

  it('should add a course when passed "ADD_USER" action', () => {
    const { initialState,newUser } = config()
    const action = addUser(newUser)
    const newState = userReducer(initialState,action)
    expect(newState.length).to.equal(initialState.length +1)
  })
})
