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
  console.log(diceRoll);
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

  // console.log(newRollArr);

  function handleClick() {
    if (isGamePlaying) {
      console.log("click");
      console.log(isTwoDiceGame, newRollArr[0]);
      // diceRollUpdate(newRollArr);
      if (!isTwoDiceGame && newRollArr[0] === 1) {
        diceRollsOne();
        console.log("1");
      } else if (isTwoDiceGame) {
        if (newRollArr[0] === 1 && newRollArr[1] === 1) {
          console.log("2");
          diceRollsOne();
        } else {
          console.log("3");
          diceRollUpdate(newRollArr);
          !isTwoDiceGame
            ? currentTotalUpdate(newRollArr[0])
            : currentTotalUpdate(newRollArr.reduce((a, b) => a + b, 0));
        }
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
