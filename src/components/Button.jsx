import React from "react";
import { connect } from "react-redux";
import { holdCurrentTotalAction } from "../action";

function Button({ currentRollInfo, holdCurrentTotal }) {
  // getting the current player index#
  let currentPlayer;
  currentRollInfo.playersInfo[0].isPlaying
    ? (currentPlayer = 0)
    : (currentPlayer = 1);

  // combining currentPlayer with the roll and total info
  const importantInfo = [currentPlayer, currentRollInfo.turnInfo];

  function handleClick() {
    holdCurrentTotal(importantInfo);
  }
  return (
    <>
      <div
        onClick={() => {
          handleClick();
        }}
      >
        this is the button
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { currentRollInfo: state };
}

function mapDispatchToProps(dispatch) {
  return {
    holdCurrentTotal: function (data) {
      dispatch(holdCurrentTotalAction(data));
    },
  };
}

const connectedButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default connectedButton;
