import { AUTH_CHANGE } from './authTypeActions'

export function changeAuthentication(isLoggedIn) {
  return {
    type: AUTH_CHANGE,
    payload: isLoggedIn
  }
}
