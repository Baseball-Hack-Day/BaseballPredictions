import React from 'react'

const Team = (props) => {
  console.log(props)
  return (
    <table>
      <tbody>
        <th>Player</th>
        <th>Runs</th>
        <th>Hits</th>
        <td>{props.nameFirst}</td>
      </tbody>
    </table>
  )
}

export default Team;