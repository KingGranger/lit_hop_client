import { combineReducers } from 'redux';

const initialState = { currentUser: {} };
const initialLocation = {lat: 0, lng: 0}
const initialBars = {bars: []}
const intialInfo = {showInfo: false}
const initialBarId = 0
const initialTrips = []
const initialTripStart = false
const initialFilter = []

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

const filterReducer = (state = initialFilter, action) => {
  switch (action.type){
    case 'FILTER_BARS':
      const newBars = action.payload.bars.filter(bar => {
        for(let i = 0; i < action.payload.filters.length; i++){
          // console.log(action.payload.filters[i], bar.types)
          if(bar.types.includes(action.payload.filters[i].replace(/ /g,"_"))){
            return true;
          }
        }
      })
      return newBars;
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
      return action.payload
    default:
      return state;
  }

}

const tripReducer = (state = initialTrips, action) => {
  switch (action.type){
    case 'ADD_BAR':
      return state.concat(action.payload)
    case 'REMOVE_BAR':
      const barToRemove = state.findIndex(bar => bar.id === action.payload)
      return  [...state.slice(0, barToRemove), ...state.slice(barToRemove + 1)]
    case 'START_JOURNEY':
        return [action.payload, ...state]
    case 'NEXT_STOP':
      return state.slice(1,state.length)
    case 'RESTART':
      return []
    default:
      return state
  }
}

const journeyReducer = (state = initialTripStart, action) => {
  switch (action.type){
    case 'START_JOURNEY':
      return !state;
    case 'RESTART':
      return !state;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth: authUserReducer,
  position: locationReducer,
  bars: barsReducer,
  showInfo: infoReducer,
  currentBarId: barIdReducer,
  trips: tripReducer,
  filteredBars: filterReducer,
  onJourney: journeyReducer
})

export default rootReducer;
