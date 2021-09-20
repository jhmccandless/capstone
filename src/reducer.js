const initialState = {
  gamePlaying: false,
  twoDiceGame: false,
  bigPigGame: false,
  diceRoll: [0, 0],
  currentTotal: 0,
  canHoldCurrentTotal: true,
  gameEndTotal: 20,
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
  // console.log(action);
  switch (action.type) {
    case "GAME_PARAMETERS":
      return {
        ...state,
        gamePlaying: true,
        twoDiceGame:
          action.data[3] === "two-dice" || action.data[3] === "big-pig"
            ? true
            : false,
        bigPigGame: action.data[3] === "big-pig" ? true : false,
        gameEndTotal: action.data[2],
        playerInfo: [
          {
            name: action.data[0],
            score: 0,
            isPlaying: true,
          },
          {
            name: action.data[1],
            score: 0,
            isPlaying: false,
          },
        ],
      };
    case "DICE_ROLL_UPDATE":
      return {
        ...state,
        diceRoll: action.data,
        canHoldCurrentTotal: true,
      };
    case "CURRENT_TOTAL_UPDATE":
      const tempCurrTotal = state.currentTotal + action.data;
      return {
        ...state,
        currentTotal: tempCurrTotal,
      };
    case "ONE_ON_DICE":
      return {
        ...state,
        currentRoll: 0,
        currentTotal: 0,
        // diceRoll: [0, 0],
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
    case "LOSE_SCORE":
      return {
        ...state,
        playerInfo: state.playerInfo.map((player) =>
          player.isPlaying ? { ...player, score: 0 } : player
        ),
      };
    case "DISABLE_HOLD":
      return {
        ...state,
        canHoldCurrentTotal: false,
      };
    case "SCORE_REACHED":
      return {
        ...state,
        gamePlaying: false,
      };
    case "RESET_GAME":
      const player1Same = state.playerInfo[0].name;
      const player2Same = state.playerInfo[1].name;
      return {
        ...state,
        gamePlaying: true,
        diceRoll: [0, 0],
        currentTotal: 0,
        playerInfo: [
          {
            isPlaying: true,
            name: player1Same,
            score: 0,
          },
          {
            isPlaying: false,
            name: player2Same,
            score: 0,
          },
        ],
      };
    default:
      return state;
  }
}

export default game_reducer;
