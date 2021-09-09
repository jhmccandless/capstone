import React from "react";

function NewGameParamsUI({ gameParameters }) {
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    // console.log(event.target[2].value);
    // console.log(event.target[3].value);
    // console.log(event.target[4].value);
    // console.log(event.target[5].value);
    gameParameters(78);

    // console.log("submitted");
    // console.log(event.target.value);
    // alert("slow down page reload");
  }

  return (
    <>
      <div>this is the the game parameters</div>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <label htmlFor="player1">Player 1:</label>
          <input type="text" defaultValue="Player 1" name="player1"></input>
          <br />
          <label htmlFor="player2">Player 2:</label>
          <input type="text" defaultValue="Player 2" name="player2"></input>
          <br />
          <label htmlFor="max_score">Score Goal:</label>
          <input type="number" name="max_score" defaultValue="100"></input>
          <br />
          <input type="radio" id="standard" name="game-type" defaultChecked />
          <label htmlFor="standard">Standard</label>
          <input type="radio" id="two-dice" name="game-type" />
          <label htmlFor="two-dice">Two-Dice Pig</label>
          <input type="radio" id="big-pig" name="game-type" />
          <label htmlFor="big-pig">Big Pig</label>
          <br />
          <button type="submit">Let's Play!</button>
        </form>
      </div>
    </>
  );
}

export default NewGameParamsUI;
