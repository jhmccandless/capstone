import React from "react";
import "../styling/DiceBox.css";

function DiceRollUI({
  isGamePlaying,
  diceRoll,
  diceRollUpdate,
  isTwoDiceGame,
  secondDiceRollUpdate,
  diceRollsOne,
}) {
  // generating a random number and assigning to variable
  const randomNumGen = function () {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
  };
  let newRollArr = [randomNumGen(), randomNumGen()];
  console.log(isTwoDiceGame);
  // making new array to map over to decice between one or two dice
  let singleRollArr = [];
  if (isGamePlaying && isTwoDiceGame) {
    singleRollArr = newRollArr;
  } else if (isGamePlaying) {
    singleRollArr.push(diceRoll[0]);
  }

  function handleClick() {
    diceRollUpdate(newRollArr);
    // let randomNum;
    // if (isGamePlaying) {
    //   randomNum = Math.floor(Math.random() * 6) + 1;
    //   randomNum === 1 ? diceRollsOne() : diceRollUpdate(randomNum);
    // }
    // if (twoDiceRoll) {
    //   randomNum = Math.floor(Math.random() * 6) + 1;
    //   let randomNum2 = Math.floor(Math.random() * 6) + 1;
    //   const twoDiceRollArray = [randomNum, randomNum2];
    //   randomNum2 || randomNum === 1
    //     ? diceRollsOne()
    //     : secondDiceRollUpdate(twoDiceRollArray);
    // }
  }

  return (
    <>
      <div
        className="wrapper"
        onClick={() => {
          handleClick();
        }}
      >
        {singleRollArr.map((el, index) => {
          return <div key={index}>this is a dice {el}</div>;
        })}
      </div>
    </>
  );
}

export default DiceRollUI;
