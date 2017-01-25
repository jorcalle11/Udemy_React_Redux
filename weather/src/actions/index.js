import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER'
const API_KEY = 'cf3742cfb9adef87690ac8916cf149bc'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&mode=json`

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}