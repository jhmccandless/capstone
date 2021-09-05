import React from "react";

function PlayerUI({ playerState, whichPlayer }) {
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

export default PlayerUI;
