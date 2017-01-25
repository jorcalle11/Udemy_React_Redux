import _ from 'lodash'
import { FETCH_COUNTRIES } from '../../actions/countries'

const countryReducer = (state={},action) => {
  switch (action.type) {
  case FETCH_COUNTRIES:
    return _.mapKeys(action.payload.data,'name')
  default:
    return state
  }
}

export default countryReducer
