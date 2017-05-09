import { combineReducers } from 'redux';
import application from './application';
import contact from './contact';
import curriculum from './curriculum';
import error from './error';

let rootReducer = combineReducers({
  application,
  contact,
  curriculum,
  error
});

export default rootReducer;
