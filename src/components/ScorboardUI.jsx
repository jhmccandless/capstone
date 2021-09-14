import React, { useEffect, useState } from "react";
import "../styling/scoreboard.css";

function ScoreboardUI() {
  const [scores, setScores] = useState([]);

  function gettingData() {
    return fetch("http://localhost:3785/").then((res) => res.json());
    // .then((data) => setScores(data));
  }

  useEffect(() => {
    let mounted = true;
    gettingData().then((scores) => {
      if (mounted) {
        setScores(scores);
      }
    });
    return () => (mounted = false);
  }, []);
  // console.log(gettingData());

  return (
    <>
      <div>this is the the scoreboard</div>
      <ul>
        {scores.map((scores, index) => (
          <li key={index}>
            {scores.username} score: {scores.own_score} percentage:{" "}
            {scores.percentage}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ScoreboardUI;
