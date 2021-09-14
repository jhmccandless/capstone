import React from "react";
import DiceRoll from "../containers/DiceRoll";
import Player from "../containers/Player";
import CurrentTotal from "../containers/CurrentTotal";
import TotalGoal from "../containers/TotalGoal";
import ButtonUI from "./ButtonUI";
import { Redirect, useHistory } from "react-router-dom";
import { useEffect } from "react";

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
}) {
  let gameWinnerInfo, gameLoserInfo;
  console.log(currentPlayerInfo[0].score > currentPlayerInfo[1].score);
  if (currentPlayerInfo[0].score > currentPlayerInfo[1].score) {
    console.log("0 is the winner");
    gameWinnerInfo = currentPlayerInfo[0];
    gameLoserInfo = currentPlayerInfo[1];
  } else if (currentPlayerInfo[0].score < currentPlayerInfo[1].score) {
    console.log("1 is the winner");
    gameWinnerInfo = currentPlayerInfo[1];
    gameLoserInfo = currentPlayerInfo[0];
  }

  function postScores() {
    return fetch("http://localhost:3785/scores_db", {
      method: "POST",
      body: JSON.stringify({
        winner: gameWinnerInfo,
        loser: gameLoserInfo,
        gameEndTotal: currentGameTotal,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((req) => req.json());
    // .then((data) => console.log(data));
  }

  // useEffect(() => {
  //   let mounted = true;
  //   gettingData().then((scores) => {
  //     if (mounted) {
  //       setScores(scores);
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);

  // currentPlayerInfo[0].score > currentPlayerInfo[1].score
  //   ? (gameWinnerInfo = currentPlayerInfo[0])
  //   : (gameWinnerInfo = currentPlayerInfo[1]);

  // gameWinnerInfo = currentPlayerInfo[0]
  //   ? (gameLoserInfo = currentPlayerInfo[1])
  //   : (currentPlayerInfo = [0]);

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
  // getting the current player index#
  // let currentPlayer;
  // currentPlayerInfo[0].isPlaying ? (currentPlayer = 0) : (currentPlayer = 1);
  // combining currentPlayer with the roll and total info
  // const combinedInfo = [
  //   gamePlaying,
  //   // currentPlayer,
  //   dice1Current,
  //   dice2Current,
  //   currentTotal,
  // ];

  // function handleHoldClick() {
  //   if (gamePlaying && canHold) {
  //     diceRollOne();
  //     holdCurrentTotal(combinedInfo);
  //   }
  // }

  function handleResetClick() {
    resetGameReset();
    history.push("/current_game");
  }

  function wholeNewGame() {
    history.push("/new_game_setup");
  }

  function testingAPIPost() {
    console.log("testing post");
    postScores();
  }

  return (
    <>
      <div>
        {/* make post game revert to new game if no new game */}
        <h2>this is the post game</h2>
        <TotalGoal />
        <p>
          the winner is {gameWinnerInfo.name} with {gameWinnerInfo.score}
        </p>
        <p>
          the loser is {gameLoserInfo.name} with {gameLoserInfo.score}
        </p>
        {/* <ButtonUI
          name="Hold"
          handleDesiredClick={() => {
            handleHoldClick();
          }}
        /> */}
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
        <ButtonUI
          name="trial button"
          handleDesiredClick={() => {
            testingAPIPost();
          }}
        />
      </div>
    </>
  );
}

export default PostGameUI;
