import * as constants from "./constants";

export const setAmount = (amount) => ({
  type: constants.SET_AMOUNT,
  amount,
});

export const setMethod = (method) => ({
  type: constants.SET_METHOD,
  method,
});

export const setRatio = (ratio) => ({
  type: constants.SET_RATIO,
  ratio,
});
