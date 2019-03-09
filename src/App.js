import React, { Component } from 'react';
import './index.css';
import { players } from './stats'

class App extends Component {

  render() {

    let playersInfo = players.map(player => <div key={player.playerID}>{player.nameFirst} {player.nameLast}</div>)

    return (
      <div className="main-container">
        <div className="header">
          <h1>MLB GameChanger Mobile App</h1>
        </div>
        
        <div className="banner">
          <img src="https://www.baseballtradingpins.net/wp-content/uploads/2018/04/Youth-Baseball-1024x682.jpeg" />
        </div>
        
        <div className="players-container">
          <h1>List of Players for MiddleBury School District</h1>
          {playersInfo}
        </div>
      </div>
    );
  }
}

export default App;
