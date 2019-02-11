import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu/TopMenu';
import Billboard from './Components/Billboard/Billboard';
import Foot from './Components/Footer/Footer';
import MainPage from './Components/Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Billboard />
        <MainPage />
        <Foot />
      </div>
    );
  }
}

export default App;
