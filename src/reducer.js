const initialState = {
  gamePlaying: true,
  twoDiceGame: true,
  diceRoll: [0, 0],
  currentTotal: 0,
  gameEndTotal: 10,
  playerInfo: [
    {
      isPlaying: true,
      name: "Player 1",
      score: 0,
    },
    {
      isPlaying: false,
      name: "Player 2",
      score: 0,
    },
  ],
};

function game_reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "DICE_ROLL_UPDATE":
      console.log("dice roll");
      return {
        ...state,
        diceRoll: action.data,
      };
    case "CURRENT_TOTAL_UPDATE":
      const tempCurrTotal = state.currentTotal + action.data;
      return {
        ...state,
        currentTotal: tempCurrTotal,
      };
    case "ONE_ON_DICE":
      console.log("one dice");
      return {
        ...state,
        currentRoll: 0,
        currentTotal: 0,
        diceRoll: [0, 0],
        playerInfo: [
          {
            name: state.playerInfo[0].name,
            score: state.playerInfo[0].score,
            isPlaying: state.playerInfo[0].isPlaying ? false : true,
          },
          {
            name: state.playerInfo[1].name,
            score: state.playerInfo[1].score,
            isPlaying: state.playerInfo[1].isPlaying ? false : true,
          },
        ],
      };
    case "HOLD_CURRENT_TOTAL":
      const scoreToCheck = state.playerInfo[action.data[1]].score;
      const possibleWinner = scoreToCheck + action.data[4];
      console.log(scoreToCheck, possibleWinner);
      if (possibleWinner >= state.gameEndTotal) {
        console.log("winner");
        return {
          ...state,
          gamePlaying: false,
          playerInfo: state.playerInfo.map((player) =>
            !player.isPlaying
              ? { ...player, score: (player.score += action.data[4]) }
              : player
          ),
        };
      } else {
        return {
          ...state,
          playerInfo: state.playerInfo.map((player) =>
            !player.isPlaying
              ? { ...player, score: (player.score += action.data[4]) }
              : player
          ),
        };
      }
    case "SCORE_REACHED":
      return {
        ...state,
        gamePlaying: false,
      };
    case "RESET_GAME":
      return {
        ...(state = initialState),
      };
    default:
      return state;
  }
}

export default game_reducer;
