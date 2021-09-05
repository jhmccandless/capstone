import React from "react";
import "../styling/DiceBox.css";

function DiceRollUI({ diceRoll, diceRollUpdate, diceRollsOne, isGamePlaying }) {
  function handleClick() {
    if (isGamePlaying) {
      let randomNum = Math.floor(Math.random() * 6) + 1;
      randomNum === 1 ? diceRollsOne() : diceRollUpdate(randomNum);
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
        <div>this is a dice: {diceRoll}</div>
      </div>
    </>
  );
}

export default DiceRollUI;
