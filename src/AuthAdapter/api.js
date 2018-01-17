const baseUrl = 'http://localhost:3000/api/v1'

function getHeaders() {
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    Authorization: token
  };
  return headers
}

const signup = (username, password, age) => {
  const newUser = {method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({username, password, age})
  }
  return fetch('http://localhost:3000/api/v1/users', newUser)
  .then(res => res.json());
}

const login = (username, password) => {
  return fetch(`${baseUrl}/auth/`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${baseUrl}/current_user`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const sendLocation = (lat, lng) => {
    return fetch(`${baseUrl}/locations`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ lat, lng })
  })
  .then(res => res.json());
}

export default {
  auth: {
    login,
    signup,
    getCurrentUser,
    sendLocation
  }
};
