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

export function holdCurrentTotalAction(data) {
  return {
    type: "HOLD_CURRENT_TOTAL",
    data,
  };
}

export function endGameAction() {
  return {
    type: "END_GAME",
  };
}
