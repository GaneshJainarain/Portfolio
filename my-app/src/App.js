import React from 'react';
import logo from './Spike.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Names' <code> Ganesh</code> and im killin React rn.
        </p>
        <a
          className="App-link"
          href="https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click for a Surprise
        </a>
        <a
          className="App-link"
          href="https://github.com/RicheyJay23"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click for a Surprise2
        </a>
      </header>
    </div>
  );
}

export default App;
