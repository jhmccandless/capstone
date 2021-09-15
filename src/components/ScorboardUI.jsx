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

  return (
    <>
      <h2>Scoreboard</h2>
      <p>
        The ranks are are determined on the percentage the winner won by at the
        end of the game. If two or more percentages are the same, the game won
        with a higher Game Goal is ranked higer.
      </p>
      <div className="scoreTable">
        <table id="cal-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Game Type</th>
              <th>Score</th>
              <th>Opponent's Score</th>
              <th>Game Goal</th>
              <th>Percentage Won By</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((el, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>{el.username}</th>
                <th>{el.game_type}</th>
                <th>{el.own_score}</th>
                <th>{el.opponent_score}</th>
                <th>{el.game_goal}</th>
                <th>{el.percentage}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ScoreboardUI;
