import React, { useEffect, useState } from "react";

function ScoreboardUI() {
  // const [scores, setScores] = useState("");

  function gettingData() {
    fetch("http://localhost:3785/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  gettingData();

  return (
    <>
      <div>this is the the scoreboard</div>
    </>
  );
}

export default ScoreboardUI;
