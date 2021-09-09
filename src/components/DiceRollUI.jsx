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

  // generating the roll to be displayed upon click
  const newRollArr = [randomNumGen(), randomNumGen()];

  function handleClick() {
    if (isGamePlaying) {
      diceRollUpdate(newRollArr);
      if (isTwoDiceGame) {
        // two dice game/big pig scope
        if (newRollArr[0] === newRollArr[1]) {
          // double rolled two dice/big pig
          if (newRollArr[0] === 1) {
            // double one rolled two dice/big pig
            if (isBigPigGame) {
              // double one big pig ONLY
              currentTotalUpdate(25);
              disableHold();
            } else {
              // double one two dice ONLY
              loseScore();
              diceRollsOne();
            }
          } else {
            // non one double two dice/big pig
            disableHold();
            if (isBigPigGame) {
              // non one double big pig ONLY
              const doubleDiceRoll = 2 * newRollArr.reduce((a, b) => a + b, 0);
              currentTotalUpdate(doubleDiceRoll);
            } else {
              // non one double two dice ONLY
              currentTotalUpdate(newRollArr.reduce((a, b) => a + b, 0));
            }
          }
        } else if (newRollArr[0] === 1 || newRollArr[1] === 1) {
          // either dice is a one two dice/big pig
          diceRollsOne();
        } else {
          // regular non double roll two dice/big pig
          currentTotalUpdate(newRollArr.reduce((a, b) => a + b, 0));
        }
      } else if (newRollArr[0] === 1) {
        // roll one standard pig
        diceRollsOne();
      } else {
        // reg roll standard pig
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
