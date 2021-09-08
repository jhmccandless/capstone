import React from "react";
import "../styling/DiceBox.css";

function DiceRollUI({
  isGamePlaying,
  diceRoll,
  diceRollUpdate,
  twoDiceRoll,
  secondDiceRollUpdate,
  diceRollsOne,
}) {
  function handleClick() {
    let randomNum;
    if (isGamePlaying) {
      randomNum = Math.floor(Math.random() * 6) + 1;
      randomNum === 1 ? diceRollsOne() : diceRollUpdate(randomNum);
    }
    if (twoDiceRoll) {
      randomNum = Math.floor(Math.random() * 6) + 1;
      let randomNum2 = Math.floor(Math.random() * 6) + 1;
      const twoDiceRollArray = [randomNum, randomNum2];
      randomNum2 || randomNum === 1
        ? diceRollsOne()
        : secondDiceRollUpdate(twoDiceRollArray);
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
