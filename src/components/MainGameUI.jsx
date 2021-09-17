import React from "react";
import DiceRoll from "../containers/DiceRoll";
import Player from "../containers/Player";
import CurrentTotal from "../containers/CurrentTotal";
import TotalGoal from "../containers/TotalGoal";
import ButtonUI from "./ButtonUI";
import { Redirect, useHistory } from "react-router-dom";
import "../styling/MainGame.css";

function MainGameUI({
  dice1Current,
  dice2Current,
  currentPlayerInfo,
  gamePlaying,
  currentTotal,
  holdCurrentTotal,
  resetGameReset,
  diceRollOne,
  canHold,
}) {
  let history = useHistory();
  // getting the current player index#
  let currentPlayer;
  currentPlayerInfo[0].isPlaying ? (currentPlayer = 0) : (currentPlayer = 1);
  // combining currentPlayer with the roll and total info
  const combinedInfo = [
    gamePlaying,
    currentPlayer,
    dice1Current,
    dice2Current,
    currentTotal,
  ];

  function handleHoldClick() {
    if (gamePlaying && canHold) {
      diceRollOne();
      holdCurrentTotal(combinedInfo);
    }
  }

  function handleResetClick() {
    resetGameReset();
  }

  function wholeNewGame() {
    history.push("/new_game_setup");
  }

  return (
    <>
      {!gamePlaying ? (
        <Redirect to="/post_game" />
      ) : (
        <div className="main_game_div">
          <TotalGoal />
          <CurrentTotal />
          <br />
          <DiceRoll />
          <br />
          <div className="button-div">
            <ButtonUI
              name="Hold"
              handleDesiredClick={() => {
                handleHoldClick();
              }}
            />
          </div>
          <br />
          <div className="player-wrapper">
            <Player whichPlayer="0" />
            <Player whichPlayer="1" />
          </div>
          <br />
          <br />
          <div className="button-div">
            <ButtonUI
              name="Reset"
              handleDesiredClick={() => {
                handleResetClick();
              }}
            />
            <ButtonUI
              name="Change Game Parameters"
              handleDesiredClick={() => {
                wholeNewGame();
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MainGameUI;
