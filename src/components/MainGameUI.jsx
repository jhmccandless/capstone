import React from "react";
import DiceRoll from "../containers/DiceRoll";
import Player from "./Player";
import CurrentTotal from "./CurrentTotal";
import ButtonUI from "./ButtonUI";
import { connect } from "react-redux";
import { holdCurrentTotalAction } from "../action";

function MainGameUI({ currentRollInfo, holdCurrentTotal }) {
  // getting the current player index#
  let currentPlayer;
  currentRollInfo.playersInfo[0].isPlaying
    ? (currentPlayer = 0)
    : (currentPlayer = 1);

  // combining currentPlayer with the roll and total info
  const combinedInfo = [currentPlayer, currentRollInfo.turnInfo];

  function handleHoldClick() {
    console.log("this has been clicked");
    holdCurrentTotal(combinedInfo);
  }
  return (
    <>
      <h2>this is the main game page</h2>
      <DiceRoll />
      <CurrentTotal />
      <Player whichPlayer="0" />
      <Player whichPlayer="1" />
      <ButtonUI
        handleDesiredClick={() => {
          handleHoldClick();
        }}
      />
    </>
  );
}

function mapStateToProps(state) {
  console.log("still not working wrong");
  return { currentRollInfo: state };
}

function mapDispatchToProps(dispatch) {
  console.log("did i hit this? wrong");
  return {
    holdCurrentTotal: function (data) {
      dispatch(holdCurrentTotalAction(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGameUI);

// export default MainGameUI;
