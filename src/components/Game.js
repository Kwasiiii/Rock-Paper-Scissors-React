import React from 'react'

const Game = ({ choices, playerchooses, playerChoice, computerChoice }) => {

  return (
    <>
      <div className="grid" id="grid">
        <h3>Player Choice: {playerChoice}</h3>
        <h3>Computer Choice: {computerChoice}</h3>
        <div className="btnGrid">
          <button className="rock" value={choices[0]} onClick={playerchooses}></button>
          <button className="paper" value={choices[1]} onClick={playerchooses}></button>
          <button className="scissors" value={choices[2]} onClick={playerchooses}></button>
        </div>
      </div>
    </>
  )

}
export default Game