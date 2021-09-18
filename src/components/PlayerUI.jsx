import React from "react";
import "../styling/Player.css";

function PlayerUI({ playerState, whichPlayer }) {
  const playerObj = playerState[whichPlayer];
  return (
    <>
      {playerObj.isPlaying ? (
        <div className="single-player-div isTurn">
          <p className="current-player-score">score: {playerObj.score}</p>
          <p className="player-name">{playerObj.name}</p>
          {/* Playing? {playerObj.isPlaying.toString()} */}
        </div>
      ) : (
        <div className="single-player-div">
          <p className="current-player-score">score: {playerObj.score}</p>
          <p className="player-name">{playerObj.name}</p>
          {/* Playing? {playerObj.isPlaying.toString()} */}
        </div>
      )}
    </>
  );
}

export default PlayerUI;
