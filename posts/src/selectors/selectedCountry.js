import _ from 'lodash'
import { createSelector } from 'reselect'

const countrySelector = state => state.countries
const selectedCountriesSelector = state => state.selectedCountries

const getCountries = (countries,selectedCountries) => {
  const copySelectedCountries = _.filter(
    countries,
    country => _.includes(selectedCountries,country.name)
  )
  return copySelectedCountries
}

export default createSelector(
  countrySelector,
  selectedCountriesSelector,
  getCountries
)
