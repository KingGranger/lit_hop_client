import { combineReducers } from 'redux';

const initialState = { currentUser: {} };
const initialLocation = {lat: 0, lng: 0}
const initialBars = []

const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {...state, currentUser: action.payload};
    case 'LOGOUT_USER':
      return {...state, currentUser: {}};
    default:
      return state;
  }
};

const locationReducer = (state = initialLocation, action) => {
  switch (action.type){
    case 'SET_LOCATION':
      return {...state, lat: action.payload.lat, lng: action.payload.lng};
    default:
      return state;
  }
}

const barsReducer = (state = initialBars, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return {...state}
    default:
      return state;

  }
}


const rootReducer = combineReducers({
  auth: authUserReducer,
  position: locationReducer
})

export default rootReducer;
