import { FETCH_WEATHER } from '../actions';

export const weather = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      const { city } = action.payload.data
      if (state.find(weather => weather.city.name === city.name)) {
        return state
      }
      return [...state,action.payload.data]
    default:
      return state
  }
}