import {combineReducers} from 'redux';
import {navigationReducer} from './navigationReducer';

function lastAction(state = null, action) {
  return action;
}

const rootReducer = combineReducers({ 
  navigationReducer,
	lastAction 
});

export default rootReducer;