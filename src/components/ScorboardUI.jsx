import React, { useEffect, useState } from "react";

function ScoreboardUI() {
  const [scores, setScores] = useState("");

  fetch("http://localhost:3785/")
    .then((res) => res.json())
    .then((res) => console.log(res));

  return (
    <>
      <div>this is the the scoreboard</div>
    </>
  );
}

export default ScoreboardUI;
