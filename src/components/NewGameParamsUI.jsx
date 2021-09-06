import React from "react";

function NewGameParamsUI() {
  return (
    <>
      <div>this is the the game parameters</div>
      <div className="form-div">
        <form>
          <label htmlFor="player1">Player 1:</label>
          <input type="text" defaultValue="Player 1" name="player1"></input>
          <label htmlFor="player2">Player 2:</label>
          <input type="text" defaultValue="Player 2" name="player2"></input>
          <label htmlFor="max_score">Score Goal:</label>
          <input type="integer" name="max_score"></input>
          <input type="radio" id="standard" name="game-type" checked />
          <label htmlFor="standard">Standard</label>
          <input type="radio" id="two-dice" name="game-type" />
          <label htmlFor="two-dice">Two-Dice Pig</label>
          <input type="radio" id="big-pig" name="game-type" />
          <label htmlFor="big-pig">Big Pig</label>
        </form>
      </div>
    </>
  );
}

export default NewGameParamsUI;
