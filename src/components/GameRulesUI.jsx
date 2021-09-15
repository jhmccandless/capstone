import React from "react";

function GameRulesUI() {
  return (
    <>
      <div>this is the the game rules</div>
      <div>
        Each turn, a player repeatedly rolls a die until either a 1 is rolled or
        the player decides to "hold": If the player rolls a 1, they score
        nothing and it becomes the next player's turn. If the player rolls any
        other number, it is added to their turn total and the player's turn
        continues. If a player chooses to "hold", their turn total is added to
        their score, and it becomes the next player's turn. The first player to
        score 100 or more points wins. For example, the first player, Donald,
        begins a turn with a roll of 5. Donald could hold and score 5 points,
        but chooses to roll again. Donald rolls a 2, and could hold with a turn
        total of 7 points, but chooses to roll again. Donald rolls a 1, and must
        end his turn without scoring. The next player, Alexis, rolls the
        sequence 4-5-3-5-5, after which she chooses to hold, and adds her turn
        total of 22 points to her score.
      </div>
      <div>
        Two-Dice Pig The game can be played with a pair of dice instead of one
        This variation is the same as Pig, except: Two standard dice are rolled.
        If neither shows a 1, their sum is added to the turn total. If a single
        1 is rolled, the player scores nothing and the turn ends. If two 1s are
        rolled, the player’s entire score is lost, and the turn ends. If a
        double is rolled, the point total is added to the turn total as with any
        roll but the player is obligated to roll again (possible sub-variation
        of the two-dice game)
      </div>
      <div>
        Big Pig This variation is the same as Two-Dice Pig, except: If two 1s
        are rolled, the player adds 25 to the turn total. If other doubles are
        rolled, the player adds twice the value of the dice to the turn total.
      </div>
    </>
  );
}

export default GameRulesUI;
