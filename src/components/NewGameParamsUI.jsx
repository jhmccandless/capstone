import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function NewGameParamsUI({ gameParameters }) {
  let history = useHistory();

  const [selectedOption, setSelectedOption] = useState("standard");

  function handleChange(event) {
    console.log("changed evnet");
    setSelectedOption(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("click");
    let gamePlayDetails = [];
    for (let i = 0; i < 3; i++) {
      gamePlayDetails.push(event.target[i].value);
    }
    gamePlayDetails.push(selectedOption);
    gameParameters(gamePlayDetails);
    history.push("/current_game");
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
          <label>
            <input
              type="radio"
              value="standard"
              checked={selectedOption === "standard"}
              onChange={handleChange}
            />
            Standard
          </label>
          <label>
            <input
              type="radio"
              value="two-dice"
              checked={selectedOption === "two-dice"}
              onChange={handleChange}
            />
            Two-Dice Pig
          </label>
          <label>
            <input
              type="radio"
              value="big-pig"
              checked={selectedOption === "big-pig"}
              onChange={handleChange}
            />
            Big Pig
          </label>
          <br />
          <button type="submit">Let's Play!</button>
        </form>
      </div>
    </>
  );
}

export default NewGameParamsUI;
