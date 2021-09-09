import React from "react";
import "../styling/DiceBox.css";

function DiceRollUI({
  isGamePlaying,
  diceRoll,
  diceRollUpdate,
  isTwoDiceGame,
  currentTotalUpdate,
  diceRollsOne,
  isBigPigGame,
  disableHold,
  loseScore,
}) {
  // generating one dice for the map array if needed
  if (!isTwoDiceGame) {
    diceRoll = [diceRoll[0]];
  }
  // generating random numbers and assigning to array
  const randomNumGen = function () {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
  };
  const newRollArr = [randomNumGen(), randomNumGen()];

  function handleClick() {
    if (isGamePlaying) {
      if (!isTwoDiceGame && newRollArr[0] === 1) {
        // standard game with one rolled
        diceRollsOne();
      } else if (isTwoDiceGame && !isBigPigGame) {
        // two dice game scope
        if (newRollArr[0] === 1 && newRollArr[1] === 1) {
          loseScore();
        }
        if (newRollArr[0] === 1 || newRollArr[1] === 1) {
          diceRollsOne();
        } else if (newRollArr[0] === newRollArr[1]) {
          diceRollUpdate(newRollArr);
          currentTotalUpdate(newRollArr.reduce((a, b) => a + b, 0));
          disableHold();
        } else {
          // two dice reg roll
          diceRollUpdate(newRollArr);
          currentTotalUpdate(newRollArr.reduce((a, b) => a + b, 0));
        }
      } else if (isTwoDiceGame && isBigPigGame) {
        if (newRollArr[0] === 1 || newRollArr[1] === 1) {
          if (newRollArr[0] === 1 && newRollArr[1] === 1) {
            diceRollUpdate(newRollArr);
            currentTotalUpdate(25);
            disableHold();
          } else {
            diceRollsOne();
          }
        } else if (newRollArr[0] === newRollArr[1]) {
          const doubleDiceRoll = 2 * newRollArr.reduce((a, b) => a + b, 0);
          diceRollUpdate(newRollArr);
          currentTotalUpdate(doubleDiceRoll);
          disableHold();
        } else {
          // two dice reg roll
          diceRollUpdate(newRollArr);
          currentTotalUpdate(newRollArr.reduce((a, b) => a + b, 0));
        }
      } else {
        // standard game reg roll
        diceRollUpdate(newRollArr);
        currentTotalUpdate(newRollArr[0]);
      }
    }
  }

  return (
    <>
      <div
        className="wrapper"
        onClick={() => {
          handleClick();
        }}
      >
        {diceRoll.map((el, index) => {
          return <div key={index}>this is a dice {el}</div>;
        })}
      </div>
    </>
  );
}

export default DiceRollUI;
