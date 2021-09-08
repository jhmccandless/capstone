const initialState = {
  gamePlaying: true,
  twoDiceGame: false,
  diceRoll: [1, 2],
  currentTotal: 0,
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
  console.log(action);
  const currentGameEnd = state.gameEndTotal;
  const isGamePlaying = state.gamePlaying;
  switch (action.type) {
    case "DICE_ROLL_UPDATE":
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
      // let currentPlayer;

      // action.date[0] === 0 ? currentPlayer = 0 : currentPlayer === 1;

      if (action.data[0] === 0) {
        const newPlayerScore = (state.playerInfo[0].score +=
          action.data[1][1].currentTotal);
        if (newPlayerScore >= state.gameInfo[2].gameEndTotal) {
          console.log("game ended");
          return {
            ...state,
            gameInfo: [
              { currentRoll: 0 },
              { currentTotal: 0 },
              { gameEndTotal: currentGameEnd },
              { gamePlaying: false },
            ],
            playerInfo: [
              {
                name: state.playerInfo[0].name,
                score: newPlayerScore,
                isPlaying: false,
              },
              {
                name: state.playerInfo[1].name,
                score: state.playerInfo[1].score,
                isPlaying: false,
              },
            ],
          };
        } else {
          return {
            ...state,
            gameInfo: [
              { currentRoll: 0 },
              { currentTotal: 0 },
              { gameEndTotal: currentGameEnd },
              { gamePlaying: isGamePlaying },
            ],
            playerInfo: [
              {
                name: state.playerInfo[0].name,
                score: newPlayerScore,
                isPlaying: state.playerInfo[0].isPlaying ? false : true,
              },
              {
                name: state.playerInfo[1].name,
                score: state.playerInfo[1].score,
                isPlaying: state.playerInfo[1].isPlaying ? false : true,
              },
            ],
          };
        }
      } else if (action.data[0] === 1) {
        const newPlayerScore = (state.playerInfo[1].score +=
          action.data[1][1].currentTotal);
        if (newPlayerScore >= state.gameInfo[2].gameEndTotal) {
          console.log("game ended");
          return {
            ...state,
            gameInfo: [
              { currentRoll: 0 },
              { currentTotal: 0 },
              { gameEndTotal: currentGameEnd },
              { gamePlaying: false },
            ],
            playerInfo: [
              {
                name: state.playerInfo[0].name,
                score: state.playerInfo[0].score,
                isPlaying: false,
              },
              {
                name: state.playerInfo[1].name,
                score: newPlayerScore,
                isPlaying: false,
              },
            ],
          };
        } else {
          return {
            ...state,
            gameInfo: [
              { currentRoll: 0 },
              { currentTotal: 0 },
              { gameEndTotal: currentGameEnd },
              { gamePlaying: isGamePlaying },
            ],
            playerInfo: [
              {
                name: state.playerInfo[0].name,
                score: state.playerInfo[0].score,
                isPlaying: state.playerInfo[0].isPlaying ? false : true,
              },
              {
                name: state.playerInfo[1].name,
                score: newPlayerScore,
                isPlaying: state.playerInfo[1].isPlaying ? false : true,
              },
            ],
          };
        }
      }
      break;
    case "RESET_GAME":
      return {
        ...(state = {
          gameInfo: [
            { currentRoll: 0 },
            { currentTotal: 0 },
            { gameEndTotal: 20 },
            { gamePlaying: true },
          ],
          playerInfo: [
            {
              name: "Player 1",
              score: 0,
              isPlaying: true,
            },
            {
              name: "Player 2",
              score: 0,
              isPlaying: false,
            },
          ],
        }),
      };
    default:
      return state;
  }
}

export default game_reducer;
