import React, { Component } from 'react';
import Main from '../../components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>   
        <Main/>
      </div>
    );
  }
}

export default App;
