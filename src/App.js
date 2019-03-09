import React, { Component } from 'react';
import './index.css';
import { players } from './stats'
import Team from './Team'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

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

    let BOSTeam = players.filter(player => player.teamID === 'BOS')

    console.log('teams', teamNames)
    console.log('SELECTEd', this.state.selectedTeam1)
    console.log('BOSSSS', BOSTeam)

    return (
      <Router>
        {/* <Switch>
         <Route path={`/team`} component={Team} />
         </Switch> */}
      <div className="main-container">
        <div className="header">
          <h1>MLB Predictions</h1>
        </div>
        
        <div className="banner">

          <img src="https://www.baseballtradingpins.net/wp-content/uploads/2018/04/Youth-Baseball-1024x682.jpeg" />
        </div>
        
        <h1>List of Teams for MiddleBury School District</h1>
        <div className="players-container">
          {
            <table>
              <tbody>
                <tr>
                  <th>Player</th>
                  <th>Home Runs</th>
                  <th>Runs</th>
                  <th>Hits</th>
                  <th>Games</th>
                </tr>
                {
                  BOSTeam.map(player => (
                    <tr>
                      <td>{player.nameFirst} {player.nameLast}</td>
                      <td>{player.HR}</td>
                      <td>{player.R}</td>
                      <td>{player.H}</td>
                      <td>{player.G}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          }
          {/* {playersInfo} */}
          <div className="links">
            {Object.keys(teamNames).map(team =><ul>{team}</ul>)}
          </div>
            {/* //  <ul><Link to={`/${team}`}>{team}</Link></ul>)} */}

          <select onChange={this.handleChange}>
           {Object.keys(teamNames).map((team, idx) => {
             return (
               <option key={idx} value={team} >{team}</option>
             )
           })}
          </select>
          <Team player={this.state.selectedTeam1} />

          <select onChange={this.handleChanges}>
           {Object.keys(teamNames).map((team, idx) => {
             return (
               <option key={idx} value={team} >{team}</option>
             )
           })}
          </select>
          {/* <Team player={this.state.selectedTeam2} /> */}

        </div>
      </div> 
      </Router>
    );
  }
}

export default App;
