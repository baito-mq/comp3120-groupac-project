import React from 'react'
import './App.css';
import logo from './frog.png';
import Nav from './components/Nav.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <p>
          ribb.it<br/>
          <code>Coming soon</code>
        </p>
        <img className="App-logo" src={logo} alt="Ribb.it frog logo"/>
      </header>
    </div>
  );
}

export default App;
