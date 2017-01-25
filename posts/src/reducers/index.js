import { combineReducers } from 'redux'
import postsReducer from './posts.reducer'
import countryReducer from './countries/countries'
import selectedCountriesReducer from './countries/selectedCountries'
import {reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  posts : postsReducer,
  countries: countryReducer,
  selectedCountries: selectedCountriesReducer,
  form: formReducer
})

export default rootReducer
