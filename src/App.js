import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu/TopMenu';
import Billboard from './Components/Billboard/Billboard';
import Foot from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Billboard />
        <Foot />
      </div>
    );
  }
}

export default App;
