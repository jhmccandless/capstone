const initialState = {
  turnInfo: [{ currentRoll: 3 }, { currentTotal: 4 }],
  playersInfo: [
    {
      player0: {
        name: "",
        player0FullTotal: 20,
      },
    },
    {
      player1: {
        name: "",
        player1FullTotal: 30,
      },
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
