import React from "react";
import ButtonUI from "./ButtonUI";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import "../styling/PostGame.css";

function PostGameUI({
  dice1Current,
  dice2Current,
  currentPlayerInfo,
  gamePlaying,
  currentTotal,
  holdCurrentTotal,
  resetGameReset,
  diceRollOne,
  canHold,
  currentGameTotal,
  state,
}) {
  let gameWinnerInfo, gameLoserInfo, gameType;
  if (currentPlayerInfo[0].score > currentPlayerInfo[1].score) {
    gameWinnerInfo = currentPlayerInfo[0];
    gameLoserInfo = currentPlayerInfo[1];
  } else if (currentPlayerInfo[0].score < currentPlayerInfo[1].score) {
    gameWinnerInfo = currentPlayerInfo[1];
    gameLoserInfo = currentPlayerInfo[0];
  }

  if (state.bigPigGame && state.twoDiceGame) {
    gameType = "big_pig";
  } else if (state.twoDiceGame) {
    gameType = "two_dice";
  } else {
    gameType = "standard";
  }

  function postScores() {
    return fetch("http://localhost:3785/scores_db", {
      method: "POST",
      body: JSON.stringify({
        winner: gameWinnerInfo,
        loser: gameLoserInfo,
        gameEndTotal: currentGameTotal,
        gameType: gameType,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((req) => req.json());
  }

  /*
  need to know:
  winner,
  scores of each,
  total goal,

  need to make:
  winner component,
  loser componenet,
  
  need to do:
  add player info's to db,
  make sure buttons work,
  
  */
  let history = useHistory();

  useEffect(() => {
    let mounted = true;
    postScores().then(() => {
      if (mounted) {
        postScores();
      }
    });
    return () => (mounted = false);
  });

  function handleResetClick() {
    resetGameReset();
    history.push("/current_game");
  }

  function wholeNewGame() {
    history.push("/new_game_setup");
  }

  return (
    <>
      {!gameWinnerInfo ? (
        <div className="game-interrupted">
          <h3>Game Interrupted!</h3>
          <br />
          <ButtonUI
            name="New Game"
            handleDesiredClick={() => {
              wholeNewGame();
            }}
          />
        </div>
      ) : (
        <div>
          {/* make post game revert to new game if no new game */}
          <h2>this is the post game</h2>
          <br />
          <p>
            the winner is {gameWinnerInfo.name} with {gameWinnerInfo.score}
          </p>
          <br />
          <p>
            the loser is {gameLoserInfo.name} with {gameLoserInfo.score}
          </p>
          <br />
          <div className="button-div">
            <ButtonUI
              name="Reset"
              handleDesiredClick={() => {
                handleResetClick();
              }}
            />
            <ButtonUI
              name="New Game"
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

export default PostGameUI;
