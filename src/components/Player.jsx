import React from "react";
import { connect } from "react-redux";

function Player({ playerState, whichPlayer }) {
  const playerObj = playerState[whichPlayer];
  return (
    <>
      <div>
        this is a player {playerObj.name}, score: {playerObj.score}, Playing?{" "}
        {playerObj.isPlaying.toString()}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { playerState: state.playersInfo };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connectedPlayer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default connectedPlayer;
