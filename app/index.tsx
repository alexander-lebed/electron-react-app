import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import AppMenuListener from './AppMenuListener';
import './app.global.css';

const store = configureStore();
new AppMenuListener(store);

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
);
