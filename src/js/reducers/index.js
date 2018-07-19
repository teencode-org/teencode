import { combineReducers } from 'redux';
import application from './application';
import contact from './contact';
import curriculum from './curriculum';
import progress from './progress';
import error from './error';
import blog from './blog';
import summerClub from './summerClub'

let rootReducer = combineReducers({
  application,
  contact,
  curriculum,
  progress,
  error,
  blog,
  summerClub
});

export default rootReducer;
