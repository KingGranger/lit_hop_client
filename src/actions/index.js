import api from '../AuthAdapter/api'

export const fetchUser = () => {
  return dispatch => {
    dispatch({type: 'ASYNC_START'})
    api.auth.getCurrentUser().then(user => {
      dispatch(setUser(user))
    })
  }
}

export const createUser = (newUserData, history) =>  {
  return dispatch => {
    dispatch({ type: 'ASYNC_START' })
    api.auth.signup(newUserData.username, newUserData.password, newUserData.age)
    .then(user => {
      localStorage.setItem('token', user.token)
      dispatch(setUser(user))
      history.push('/home');
    })
  }
}

export const loginUser = (userData, history) => {
  return dispatch => {
    api.auth.login(userData.username, userData.password).then(user =>{
      localStorage.setItem('token', user.token)
      dispatch(setUser(user))
      history.push('/home');
    })
  }
}

export const setUser = (user) => {
  return {type: 'SET_USER', payload: user}
}

export const logoutUser = (history) => {
  localStorage.removeItem('token');
  history.replace('/')
  return { type: 'LOGOUT_USER' };
};
