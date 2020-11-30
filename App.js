import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/redux.config';
// import { PersistGate } from 'redux-persist/integration/react';
import { OverlapLoading } from './src/components';
import { LoginScreen, SignUpScreen } from './src/screens';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <OverlapLoading />
        <LoginScreen/>
      </Provider>
    );
  }
}