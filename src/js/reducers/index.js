import { combineReducers } from 'redux';
import application from './application';
import contact from './contact';
import curriculum from './curriculum';
import progress from './progress';
import error from './error';

let rootReducer = combineReducers({
  application,
  contact,
  curriculum,
  progress,
  error
});

export default rootReducer;
