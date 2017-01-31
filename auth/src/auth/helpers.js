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

function getPayload() {
  const token = getToken()
  if (token && token.split('.').length === 3){
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-','+').replace('-','/')
    return JSON.parse(window.atob(base64))
  }
}

export {
  headerWithAuthorization,
  saveToken,
  removeToken,
  getToken,
  getPayload
}
