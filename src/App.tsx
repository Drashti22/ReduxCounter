import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import CounterButtons from './Components/CounterButtons';
import CounterDisplay from './Components/CounterDisplay';
import store from './Store/store';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <h1>Redux Counter App</h1>
          <CounterDisplay></CounterDisplay>
          <CounterButtons></CounterButtons>
        </div>
      </Provider>
  );
}

export default App;
