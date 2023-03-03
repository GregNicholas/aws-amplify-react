import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My name is Greg (V2)</h1>
      </header>
    </div>
  );
}

export default App;

// installed the following for aws amplify
// sudo apt-get update
// sudo apt-get -y install xdg-utils
// then:
// amplify configure