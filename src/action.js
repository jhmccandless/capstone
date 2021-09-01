export function diceRollUpdate(data) {
  console.log(data);
  return {
    type: "DICE_ROLL_UPDATE",
    data,
  };
}
