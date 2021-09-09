import React from "react";
import { Link } from "react-router-dom";

function HomePageUI() {
  return (
    <>
      <div>
        <h1>The Pig Game</h1>
        <p>
          Welcome to the The Pig Game! An application featuring a fun luck-based
          dice game for two players.
        </p>
        <p>
          For a new game with your friend, or enemy, start new game either
          through the menu or by clicking below:
        </p>
        <Link to="/new_game_setup">New Game</Link>
      </div>
    </>
  );
}

export default HomePageUI;
