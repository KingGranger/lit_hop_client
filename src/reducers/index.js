import { combineReducers } from 'redux';

const initialState = { currentUser: {} };

const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {...state, currentUser: action.payload}
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  auth: authUserReducer
})

export default rootReducer;
