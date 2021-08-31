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
  switch (action.type) {
    default:
      return state;
  }
}

export default game_reducer;
