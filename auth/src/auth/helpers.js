import { TOKEN_NAME } from '../constants'

function saveToken(token) {
  localStorage.setItem(TOKEN_NAME,token)
}

function removeToken() {
  localStorage.removeItem(TOKEN_NAME)
}

function getToken() {
  if (localStorage.getItem(TOKEN_NAME)) {
    return localStorage.getItem(TOKEN_NAME)
  }
}

function headerWithAuthorization() {
  return {
    headers: {
      authorization: getToken()
    }
  }
}

export {
  headerWithAuthorization,
  saveToken,
  removeToken,
  getToken
}
