import axios from 'axios'
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const SELECT_COUNTRY = 'SELECT_COUNTRY'
export const DESELECT_COUNTRY = 'DESSELECT_COUNTRY'


const API_URL = 'https://restcountries.eu/rest/v1/all'

export const fetchCountries = () => {
  const request = axios.get(API_URL)
  return {
    type: FETCH_COUNTRIES,
    payload: request
  }
}

export const selectCountry = (countryName) => {
  return {
    type: SELECT_COUNTRY,
    payload: countryName
  }
}

export const deselectCountry = (countryName) => {
  return {
    type: DESELECT_COUNTRY,
    payload: countryName
  }
}
