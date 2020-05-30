import * as constants from "./constants";

import methods from "../data/methods.json";
import ratios from "../data/ratios.json";

const initialState = {
  /**
   * Available methods
   * @type {Object}
   */
  methods,

  /**
   * Available ratios
   * @type {Object}
   */
  ratios,

  /**
   * ID of the current method
   * @type {String}
   */
  method: Object.keys(methods)[0],

  /**
   * Choosen amount of water in ml
   * @type {Number}
   */
  amount: methods[Object.keys(methods)[0]].amounts[0].ml,

  /**
   * Water (ml) to coffee (g) ratio
   * @type {Number}
   */
  ratio: ratios.normal.ratio,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_AMOUNT: {
      return {
        ...state,
        amount: action.amount,
      };
    }

    case constants.SET_METHOD: {
      const nextMethod = state.methods[action.method];
      const amount = nextMethod.amounts[0].ml;
      const ratio = nextMethod.ratio || state.ratio;

      return {
        ...state,
        method: action.method,
        amount,
        ratio,
      };
    }

    case constants.SET_RATIO: {
      return {
        ...state,
        ratio: action.ratio * 0.001,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
