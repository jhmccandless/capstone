import React from "react";
import DiceRoll from "../containers/DiceRoll";
import Player from "../containers/Player";
import CurrentTotal from "../containers/CurrentTotal";
import TotalGoal from "../containers/TotalGoal";
import ButtonUI from "./ButtonUI";

function MainGameUI({
  dice1Current,
  dice2Current,
  currentPlayerInfo,
  gamePlaying,
  currentTotal,
  holdCurrentTotal,
  resetGameReset,
  diceRollOne,
  currentGameTotal,
  scoreReached,
}) {
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
    if (gamePlaying) {
      diceRollOne();
      holdCurrentTotal(combinedInfo);
    }
  }

  function handleResetClick() {
    resetGameReset();
  }

  return (
    <>
      <h2>this is the main game page</h2>
      <TotalGoal />
      <DiceRoll />
      <CurrentTotal />
      <Player whichPlayer="0" />
      <Player whichPlayer="1" />
      <ButtonUI
        name="Hold"
        handleDesiredClick={() => {
          handleHoldClick();
        }}
      />
      <ButtonUI
        name="Reset"
        handleDesiredClick={() => {
          handleResetClick();
        }}
      />
    </>
  );
}

export default MainGameUI;
