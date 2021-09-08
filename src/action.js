export function diceRollUpdateAction(data) {
  return {
    type: "DICE_ROLL_UPDATE",
    data,
  };
}
export function SecondDiceRollUpdateAction(data) {
  return {
    type: "SECOND_DICE_ROLL_UPDATE",
    data,
  };
}
export function currentTotalUpdateAction(data) {
  return {
    type: "CURRENT_TOTAL_UPDATE",
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

export function resetGameAction() {
  return {
    type: "RESET_GAME",
  };
}

export function scoreReachedAction() {
  return {
    type: "SCORE_REACHED",
  };
}
