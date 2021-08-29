import React, { useState } from "react";
import "../DiceBox.css";

function DiceBox() {
  const [currRanNum, setCurrRanNum] = useState("");

  function handleClick() {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    setCurrRanNum(randomNum);
  }

  return (
    <>
      <div
        className="wrapper"
        onClick={() => {
          handleClick();
        }}
      >
        this is a dice: {currRanNum}
      </div>
    </>
  );
}

export default DiceBox;
