import { combineReducers } from 'redux';

const initialState = { currentUser: {} };
const initialLocation = {lat: 0, lng: 0}
const initialBars = []
const intialInfo = {showInfo: false}
const initialBarId = { currentBarId: 0 }

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
    case 'SET_BARS':
      return {...state, bars: action.payload};
    default:
      return state;
  }
}

const infoReducer = (state = intialInfo, action) => {
  switch (action.type){
    case 'SHOW_INFO':
      return {...state, showInfo: !state.showInfo};
    default:
      return state;
  }
}

const barIdReducer = (state = initialBarId, action) => {
  switch (action.type) {
    case 'SHOW_INFO':
      return {...state, currentBarId: action.payload}
    default:
      return state;
  }

}


const rootReducer = combineReducers({
  auth: authUserReducer,
  position: locationReducer,
  bars: barsReducer,
  showInfo: infoReducer,
  currentBarId: barIdReducer
})

export default rootReducer;
