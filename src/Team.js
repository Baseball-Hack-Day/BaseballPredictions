import React from 'react'

const Team = (props) => {
  console.log('props', props.player, props.player[0])

  const player = props.player
  console.log('play', player)

  // let {player} =  props
  // console.log(player)

  // const list = player.map(play => 
  //   <ul key={play.playerID}>{play.nameFirst}</ul>)

  // const list = Object.keys(player[0]).map(play => 
  //   <ul key={play.playerID}>{play.nameFirst}</ul>)
  return (
  <div>
   {/* {list} */}
      </div>

    // <table>
    //   <tbody>
    //     <th>Player</th>
    //     <th>Runs</th> */}
    //     <th>Hits</th>
    //     {/* {props.player.map(play => {
    //      return <tr key={play.playerID}>{play.nameFirst}</tr>
    //     })} */}
    //   </tbody>
    // </table>
  )
}

export default Team;