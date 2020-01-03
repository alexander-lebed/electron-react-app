import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

type Props = {
  store: any;
};

const Root = (props: Props) => (
  <Provider store={props.store}>
    <App />
  </Provider>
);

export default Root;
