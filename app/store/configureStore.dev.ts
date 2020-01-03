import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createRootReducer from '../reducers';
import * as emailActions from '../actions/emails';
import * as appActions from '../actions/app';

const rootReducer = createRootReducer();

const configureStore = (initialState?: any) => {
  const middleware = [];
  const enhancers = [];

  middleware.push(thunk);

  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  middleware.push(logger);
  // Redux DevTools Configuration
  const actionCreators = {
    appActions,
    emailActions
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://extension.remotedev.io/docs/API/Arguments.html
        actionCreators
      })
    : compose;

  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  const store = createStore(rootReducer, initialState, enhancer);

  if ((module as any).hot) {
    (module as any).hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
};

export default configureStore;
