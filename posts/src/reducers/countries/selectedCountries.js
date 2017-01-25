import _ from 'lodash'
import { SELECT_COUNTRY,DESELECT_COUNTRY } from '../../actions/countries.js'

export default (state={},action) => {
  switch (action.type) {
  case SELECT_COUNTRY:
    return [ ...state, action.payload ]
  case DESELECT_COUNTRY:
    return _.without(state,action.payload)
  default:
    return state
  }
}
