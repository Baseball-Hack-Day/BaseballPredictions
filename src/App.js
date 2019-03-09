import React, { Component } from 'react';
import './index.css';
import { players } from './stats'
import Team from './Team'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  constructor(){
    super()
    this.state = {
      selectedTeam1: {},
      selectedTeam2: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChanges = this.handleChanges.bind(this)
  }

  handleChange(e) {
    let team = e.target.value
    let arr = players.filter(player => {
      if (player.teamID === team){
        return true
      }
    })
    this.setState({
      selectedTeam1: arr
    })
  }

  handleChanges(e) {
    let team = e.target.value
    let arr = players.filter(player => {
      if (player.teamID === team){
        return true
      }
    })
    this.setState({
      selectedTeam2: arr
    })
  }

  render() {
    const teamNames = {};
    let playersInfo = players.map(player => <div key={player.playerID}>{player.nameFirst} {player.nameLast} Runs: {player.R}</div>)
    let teams = players.forEach(player => {
      if (!teamNames[player.teamID]) {
        teamNames[player.teamID] = [{name: player.nameLast, runs: player.R}]
      } else {
        teamNames[player.teamID].push({name: player.nameLast, runs: player.R})
      }
    });

    console.log('teams', teamNames)
    console.log('SELECTEd', this.state.selectedTeam1)

    return (
      <Router>
      <div className="main-container">
        <div className="header">
          <h1>MLB Predictions</h1>
        </div>
        
        <div className="banner">

          <img src="https://www.baseballtradingpins.net/wp-content/uploads/2018/04/Youth-Baseball-1024x682.jpeg" />
        </div>
        
        <div className="players-container">
          <h1>List of Teams for MiddleBury School District</h1>
          {/* {playersInfo} */}
          
          {Object.keys(teamNames).map(team => <ul><Link to={`/${team}`}>{team}</Link></ul>)}

          <select onChange={this.handleChange}>
           {Object.keys(teamNames).map((team, idx) => {
             return (
               <option key={idx} value={team} >{team}</option>
             )
           })}
          </select>

          <select onChange={this.handleChanges}>
           {Object.keys(teamNames).map((team, idx) => {
             return (
               <option key={idx} value={team} >{team}</option>
             )
           })}
          </select>

        </div>
      </div> 
      </Router>
    );
  }
}

export default App;
