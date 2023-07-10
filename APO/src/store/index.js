import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import suitReducer from '../reducer/suitReducer';
import userReducer from '../reducer/userReducer';
import instrumentReducer from '../reducer/instrumentReducer';

const rootReducer = combineReducers({
  user: userReducer,
  suit: suitReducer,
  instrument: instrumentReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
