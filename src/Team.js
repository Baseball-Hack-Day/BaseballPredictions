import React from "react";
const Team = props => {
  console.log("props", props.player, props.player[0]);
  const { player } = { ...props };
  console.log(typeof player);
  const list = Object.keys(player);
  let arr = list.map((play, idx) => {
    //  <ul key={idx}>{player[play].nameLast}</ul>);
    return (
      <tr key={idx}>
        <td>
          {player[play].nameFirst} {player.nameLast}
        </td>
        <td>{player[play].HR}</td>
        <td>{player[play].R}</td>
        <td>{player[play].H}</td>
        <td>{player[play].G}</td>
      </tr>
    );
  });
  return (
    // <div>{arr}</div>
    <table>
      <tbody>
        <tr>
          <th>Player</th>
          <th>Home Runs</th>
          <th>Runs</th>
          <th>Hits</th>
          <th>Games</th>
        </tr>
        {arr}
      </tbody>
    </table>
  );
};
export default Team;