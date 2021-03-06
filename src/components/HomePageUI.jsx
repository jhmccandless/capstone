import React from "react";
import "../styling/Home.css";
import { Link } from "react-router-dom";

function HomePageUI() {
  return (
    <>
      <div className="home-wrapper">
        <h2>Welcome Players!</h2>
        <br />
        <p>
          Welcome to One and Done! An application featuring a fun luck-based
          dice game for two players. One and Done is commonly known as the Pig
          Game.
        </p>
        <br />
        <p>
          For a new game with your friend, or enemy, start new game either
          through the menu or by clicking below:
        </p>
        <br />
        <Link className="link" to="/new_game_setup">
          <p>New Game</p>
        </Link>
      </div>
    </>
  );
}

export default HomePageUI;
