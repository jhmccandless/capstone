import React from "react";
import DiceRoll from "../containers/DiceRoll";
import Player from "./Player";
import CurrentTotal from "./CurrentTotal";
import ButtonUI from "./ButtonUI";

function MainGameUI({ currentRollInfo, holdCurrentTotal, endGameReset }) {
  // getting the current player index#
  let currentPlayer;
  currentRollInfo.playersInfo[0].isPlaying
    ? (currentPlayer = 0)
    : (currentPlayer = 1);

  // combining currentPlayer with the roll and total info
  const combinedInfo = [currentPlayer, currentRollInfo.turnInfo];

  function handleHoldClick() {
    // console.log(props);
    holdCurrentTotal(combinedInfo);
  }

  function handleResetClick() {
    console.log("restart game");
    endGameReset();
  }
  return (
    <>
      <h2>this is the main game page</h2>
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
