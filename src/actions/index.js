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

export const setLocation = (lat, lng) => {
  return dispatch => {
    dispatch({type: 'SET_LOCATION', payload: { lat, lng }});
    api.auth.sendLocation(lat, lng).then(data => {
      console.log(data)
    dispatch(setBars(data))
  })}
}

export const setBars = (bars) => {
  return {type: 'SET_BARS', payload: bars}
}

export const setInfo = (Id) => {
  return {type: 'SHOW_INFO', payload: Id}
}

export const addBar = (bar) => {
  return {type: 'ADD_BAR', payload: bar}
}

export const removeBar = (Id) => {
    return {type: 'REMOVE_BAR', payload: Id}
}

export const setJourney = (start, end, trips) => {
  return dispatch => {
    api.auth.createJourney(start, end, trips).then(data => console.log(data))
  }
}

export const setReview = (title, content) => {
  return dispatch => {
    api.auth.createReview(title, content).then(data => console.log(data))
  }
}

const setTrips = (journey, trips) => {
  return {type: 'SET_TRIPS', payload: trips}
}

export const setFilter = (filters, bars) => {
  return {type: 'FILTER_BARS', payload: {filters, bars}}
}

export const beginJourney = (startPosition) => {
  return {type: 'START_JOURNEY', payload: startPosition}
}

export const nextStop = () => {
  return {type: 'NEXT_STOP'}
}

export const restartTrip = () => {
  return {type: 'RESTART'}
}
