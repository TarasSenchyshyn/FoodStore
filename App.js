import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import AppNavigation from './src/navigation/app';
import {setupStore} from './src/store';

const store = setupStore();

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
