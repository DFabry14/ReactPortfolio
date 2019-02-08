import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu/TopMenu';
import Billboard from './Components/Billboard/Billboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Billboard />
      </div>
    );
  }
}

export default App;
