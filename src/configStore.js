import { createStore applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/index'

export default const configureStore = () => {

  return createStore(rootReducer, applyMiddleware(thunk));
};
