import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styling/NewGameParams.css";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { resetGameAction } from "../action";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(255, 139, 216)",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: "inherit",
    border: "3px solid white",
    boxShadow: "4px 4px white",
  },
}));

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
    resetGameAction();
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
                  maxLength="30"
                ></input>
              </div>
              <div className="player-name">
                <label htmlFor="player2">Player 2:</label>
                <input
                  type="text"
                  defaultValue="Player 2"
                  name="player2"
                  maxLength="30"
                ></input>
              </div>
            </div>
            <label htmlFor="max_score">Score Goal:</label>
            <input
              type="number"
              name="max_score"
              defaultValue="100"
              min="1"
              max="1000"
            ></input>
            <br />
            <br />
            <h3>Game Style:</h3>
            <HtmlTooltip
              placement="right-end"
              title={
                <React.Fragment>
                  <div className="rule-snippet">
                    Key Rules:
                    <ul>
                      <li>
                        Rolling a one clears Current Total and changes player
                        turn
                      </li>
                    </ul>
                  </div>
                </React.Fragment>
              }
            >
              <label className="radio">
                <input
                  type="radio"
                  value="standard"
                  checked={selectedOption === "standard"}
                  onChange={handleChange}
                />
                Standard
              </label>
            </HtmlTooltip>

            <br />
            <HtmlTooltip
              placement="right"
              title={
                <React.Fragment>
                  <div className="rule-snippet">
                    Key Rules:
                    <ul>
                      <li>
                        Rolling a one on either dice clears the Current Total
                        and changes player turn
                      </li>
                      <li>
                        Rolling a one on both dice clears the Current Total as
                        well as the current player's score and changes the
                        player's turn
                      </li>
                      <li>
                        If a double is rolled, you have to roll again (unless it
                        is a double one)
                      </li>
                    </ul>
                  </div>
                </React.Fragment>
              }
            >
              <label className="radio">
                <input
                  type="radio"
                  value="two-dice"
                  checked={selectedOption === "two-dice"}
                  onChange={handleChange}
                />
                Two-Dice Pig
              </label>
            </HtmlTooltip>
            <br />
            <HtmlTooltip
              placement="right-start"
              title={
                <React.Fragment>
                  <div className="rule-snippet">
                    Key Rules:
                    <ul>
                      <li>
                        Rolling a one on either dice clears the Current Total
                        and changes player turn
                      </li>
                      <li>
                        Rolling a double adds twice the amount showed from both
                        dice to the current total (double 1 adds 25)
                      </li>
                      <li>If a double is rolled, you have to roll again</li>
                    </ul>
                  </div>
                </React.Fragment>
              }
            >
              <label className="radio">
                <input
                  type="radio"
                  value="big-pig"
                  checked={selectedOption === "big-pig"}
                  onChange={handleChange}
                />
                Big Pig
              </label>
            </HtmlTooltip>
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
