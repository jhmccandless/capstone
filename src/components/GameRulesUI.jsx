import React from "react";
import "../styling/GameRules.css";

function GameRulesUI() {
  return (
    <>
      <div className="rules-wrapper">
        <h2>General Rules</h2>
        <p>
          One and Done is a luck-based dice game with three variant types:
          Standard, Two-Dice, Big-Pig. General game play and a few general rules
          that apply to the game, irregardless of game variant.
        </p>
        <br />
        <div className="general">
          <h3>Overall Rules (Standard Game)</h3>
          <p>
            The overall goal of the game is for a player’s score to achieve the
            Game Score. The players’ score can be greater than or equal to the
            game score to win. Game play revolves around clicking the dice(s)
            button with the dice(s) value accumulating in the Current Total
            during a player’s turn. At anytime during a player’s turn, they have
            the option to 1) Continue the turn by rolling(clicking) the dice or
            2) Ending your turn with the Hold button which will then add the
            Current Total to your score and set the Current Total back to zero
            for the next player. However, if a [single] dice rolls a one, it
            automatically becomes the next players turn with the Current Total
            not added to your score and the Current Total goes to zero for the
            next player.
          </p>
        </div>
        <br />
        <div className="two-dice">
          <h3>Two-Dice Variant</h3>
          <p>
            The Two-Dice variant follows the same game play and rules with a few
            twists. For one, since there are two dice, if a double a rolled, the
            current player does not have the option to hold and must roll again.
            Since there is a possibility of two one’s rolling at the same time,
            the game follows the same rules as if with one dice rolling a one
            (clears the current total and becomes the next player’s turn) as
            well as clears the current player’s score!
          </p>
        </div>
        <br />
        <div className="big-pig">
          <h3>Big-Pig Variant</h3>
          <p>
            This variant also uses two dice and follows the Overall Rules. If a
            double is rolled, the current player cannot hold and must be roll
            again but unlike the Two-Dice variant, if a double is rolled, the
            total value on the dice is multiplied by two before being added to
            the current score. If the double is a double one, then the Current
            Total adds 25 and the play continues with the current player.
          </p>
        </div>
      </div>
    </>
  );
}

export default GameRulesUI;
