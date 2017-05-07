import { combineReducers } from 'redux';
import error from './error';
import application from './application';
import contact from './contact';

let rootReducer = combineReducers({
  application,
  contact,
  error
});

export default rootReducer;
