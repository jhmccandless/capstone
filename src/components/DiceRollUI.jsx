import React from "react";
import "../styling/DiceBox.css";

function DiceRollUI({
  isGamePlaying,
  diceRoll,
  diceRollUpdate,
  isTwoDiceGame,
  currentTotalUpdate,
  diceRollsOne,
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
    console.log(newRollArr);
    if (!isTwoDiceGame && newRollArr[0] === 1) {
      diceRollsOne();
    } else if (isTwoDiceGame) {
      if (newRollArr[0] === 1 && newRollArr[1] === 1) {
        diceRollsOne();
      }
    } else {
      diceRollUpdate(newRollArr);
      !isTwoDiceGame
        ? currentTotalUpdate(newRollArr[0])
        : currentTotalUpdate(newRollArr.reduce((a, b) => a + b, 0));
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
