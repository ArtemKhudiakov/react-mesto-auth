export const BASE_URL = 'https://api.nomoreparties.co';

const checkResponse = (response) => {
  response.ok ? response.json() : Promise.reject(`Error ${response.status}`)
}

export const register = (password, email) => {

  return fetch(`${BASE_URL}/signup`, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
    .then(checkResponse)
};

export const authorize = (password, email) => {

  return fetch(`${BASE_URL}/signin`, {

    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  })
    .then(checkResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token)
        return data.token
      }
    })
}

export const getContent = (token) => {
  
  return fetch(`${BASE_URL}/users/me`, {

    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(checkResponse)
}
