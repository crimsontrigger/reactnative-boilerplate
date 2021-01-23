/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux';
import {Root} from 'native-base';

import Loading from './src/components/Loading';
import Navigation from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={Loading} persistor={persistor}>
        <Root>
          <Navigation />
        </Root>
      </PersistGate>
    </Provider>
  );
};

export default App;
