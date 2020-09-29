import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          samurai <code>thats smells</code> of sunflowers.
        </p>
        <a
          className="App-link"
          href="https://giphy.com/gifs/Jir3toQTWW9Ne/html5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click for a Surprise
        </a>
      </header>
    </div>
  );
}

export default App;
