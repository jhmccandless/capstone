import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styling/NewGameParams.css";

function NewGameParamsUI({ gameParameters }) {
  let history = useHistory();

  const [selectedOption, setSelectedOption] = useState("standard");
  // const [gameDetails, setGameDetails] = useState([]);
  // hooks for each input field

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let gamePlayDetails = [];
    for (let i = 0; i < 3; i++) {
      // change this for loop somehow
      gamePlayDetails.push(event.target[i].value);
    }
    gamePlayDetails.push(selectedOption);
    gameParameters(gamePlayDetails);
    history.push("/current_game");
  }

  return (
    <>
      <div className="new-game-wrapper">
        <h2>Fill in Game Parameters</h2>
        <br />
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <div className="player-name-form">
              <div className="player-name">
                <label htmlFor="player1">Player 1:</label>
                <input
                  type="text"
                  defaultValue="Player 1"
                  name="player1"
                ></input>
              </div>
              <div className="player-name">
                <label htmlFor="player2">Player 2:</label>
                <input
                  type="text"
                  defaultValue="Player 2"
                  name="player2"
                ></input>
              </div>
            </div>
            <label htmlFor="max_score">Score Goal:</label>
            <input type="number" name="max_score" defaultValue="100"></input>
            <br />
            <br />
            <label className="radio">
              <input
                type="radio"
                value="standard"
                checked={selectedOption === "standard"}
                onChange={handleChange}
              />
              Standard
            </label>
            <label className="radio">
              <input
                type="radio"
                value="two-dice"
                checked={selectedOption === "two-dice"}
                onChange={handleChange}
              />
              Two-Dice Pig
            </label>
            <label className="radio">
              <input
                type="radio"
                value="big-pig"
                checked={selectedOption === "big-pig"}
                onChange={handleChange}
              />
              Big Pig
            </label>
            <br />
            <br />
            <button type="submit">
              <p>Let's Play!</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewGameParamsUI;
