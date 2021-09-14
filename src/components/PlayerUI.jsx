import React from "react";
import "../styling/Player.css";

function PlayerUI({ playerState, whichPlayer }) {
  const playerObj = playerState[whichPlayer];
  return (
    <>
      {playerObj.isPlaying ? (
        <div className="single-player-div isTurn">
          <div className="player-name">{playerObj.name}</div>
          <div className="current-player-score">score: {playerObj.score}</div>
          Playing? {playerObj.isPlaying.toString()}
        </div>
      ) : (
        <div className="single-player-div">
          <div className="player-name">{playerObj.name}</div>
          <div className="current-player-score">score: {playerObj.score}</div>
          Playing? {playerObj.isPlaying.toString()}
        </div>
      )}
    </>
  );
}

export default PlayerUI;
