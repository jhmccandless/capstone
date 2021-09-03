const initialState = {
  turnInfo: [{ currentRoll: 0 }, { currentTotal: 0 }],
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
  switch (action.type) {
    case "DICE_ROLL_UPDATE":
      const tempCurrTotal = state.turnInfo[1].currentTotal + action.data;
      return {
        ...state,
        turnInfo: [
          { currentRoll: action.data },
          { currentTotal: tempCurrTotal },
        ],
      };
    case "ONE_ON_DICE":
      return {
        ...state,
        turnInfo: [{ currentRoll: 0 }, { currentTotal: 0 }],
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
          turnInfo: [{ currentRoll: 0 }, { currentTotal: 0 }],
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
          turnInfo: [{ currentRoll: 0 }, { currentTotal: 0 }],
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
    default:
      return state;
  }
}

export default game_reducer;
