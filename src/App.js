import React, { Component } from 'react';
import './App.css';
import { players } from './stats'

class App extends Component {

  render() {

    let playersInfo = players.map(player => <div>{player.nameFirst} {player.nameLast}</div>)

    return (
      <div className="App">
        <h1>List of Players for MiddleBury School District</h1>
        {playersInfo}
      </div>
    );
  }
}

export default App;
