import React from 'react';

// store
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import store from './redux/store';
import {persistor} from './redux/store';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <h2>Hello world</h2>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
