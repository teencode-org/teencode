import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    compose(
      getMiddleware(),
      window.devToolsExtension? window.devToolsExtension() : (empty) => empty
    )
  );
}

const getMiddleware = () => {
  let logger = createLogger();
  let middleware = applyMiddleware(thunk);

  if (process.ENV !== 'production') {
    middleware = applyMiddleware(thunk, logger);
  }
  return middleware;
}

export default configureStore;

