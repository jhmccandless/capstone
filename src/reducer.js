const initialState = {
  turnInfo: [{ currentRoll: 3 }, { currentTotal: 4 }],
  playersInfo: [
    {
      name: "Player 1",
      score: 20,
      isPlaying: true,
    },
    {
      name: "Player 2",
      score: 30,
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
    default:
      return state;
  }
}

export default game_reducer;
