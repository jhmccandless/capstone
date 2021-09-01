export function diceRollUpdateAction(data) {
  return {
    type: "DICE_ROLL_UPDATE",
    data,
  };
}

export function diceRollOneAction() {
  return {
    type: "ONE_ON_DICE",
  };
}
