import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

export default function configureStore(initialState) {
  const logger = createLogger()

  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger),
      window.devToolsExtension? window.devToolsExtension() : (empty) => empty
    )
  );
}

