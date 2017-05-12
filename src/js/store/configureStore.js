import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

export default function configureStore(initialState) {
  let logger = createLogger()
  let middleware = applyMiddleware(thunk)

  if (process.ENV !== 'production') {
    middleware = applyMiddleware(thunk, logger)
  }

  return createStore(
    rootReducer,
    compose(
      middleware,
      window.devToolsExtension? window.devToolsExtension() : (empty) => empty
    )
  );
}

