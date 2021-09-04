const initialState = {
  gameInfo: [{ currentRoll: 0 }, { currentTotal: 0 }, { gameEndTotal: 100 }],
  playersInfo: [
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
};

function game_reducer(state = initialState, action) {
  console.log(action);
  const currentGameEnd = state.gameInfo[2].gameEndTotal;
  switch (action.type) {
    case "DICE_ROLL_UPDATE":
      const tempCurrTotal = state.gameInfo[1].currentTotal + action.data;

      return {
        ...state,
        gameInfo: [
          { currentRoll: action.data },
          { currentTotal: tempCurrTotal },
          { gameEndTotal: currentGameEnd },
        ],
      };
    case "ONE_ON_DICE":
      return {
        ...state,
        gameInfo: [
          { currentRoll: 0 },
          { currentTotal: 0 },
          { gameEndTotal: currentGameEnd },
        ],
        playersInfo: [
          {
            name: state.playersInfo[0].name,
            score: state.playersInfo[0].score,
            isPlaying: state.playersInfo[0].isPlaying ? false : true,
          },
          {
            name: state.playersInfo[1].name,
            score: state.playersInfo[1].score,
            isPlaying: state.playersInfo[1].isPlaying ? false : true,
          },
        ],
      };
    case "HOLD_CURRENT_TOTAL":
      if (action.data[0] === 0) {
        const newPlayerScore = (state.playersInfo[0].score +=
          action.data[1][1].currentTotal);
        return {
          ...state,
          gameInfo: [
            { currentRoll: 0 },
            { currentTotal: 0 },
            { gameEndTotal: currentGameEnd },
          ],
          playersInfo: [
            {
              name: state.playersInfo[0].name,
              score: newPlayerScore,
              isPlaying: state.playersInfo[0].isPlaying ? false : true,
            },
            {
              name: state.playersInfo[1].name,
              score: state.playersInfo[1].score,
              isPlaying: state.playersInfo[1].isPlaying ? false : true,
            },
          ],
        };
      } else if (action.data[0] === 1) {
        const newPlayerScore = (state.playersInfo[1].score +=
          action.data[1][1].currentTotal);
        return {
          ...state,
          gameInfo: [
            { currentRoll: 0 },
            { currentTotal: 0 },
            { gameEndTotal: currentGameEnd },
          ],
          playersInfo: [
            {
              name: state.playersInfo[0].name,
              score: state.playersInfo[0].score,
              isPlaying: state.playersInfo[0].isPlaying ? false : true,
            },
            {
              name: state.playersInfo[1].name,
              score: newPlayerScore,
              isPlaying: state.playersInfo[1].isPlaying ? false : true,
            },
          ],
        };
      }
      break;
    case "END_GAME":
      return {
        ...(state = initialState),
      };
    default:
      return state;
  }
}

export default game_reducer;
