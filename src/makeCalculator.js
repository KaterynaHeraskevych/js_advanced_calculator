'use strict';

/**
 * @return {object}
 */
const makeCalculator = () => {
  return {
    result: 0,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(number1, number2) {
      return number1 + number2;
    },

    subtract(number1, number2) {
      return number1 - number2;
    },

    multiply(number1, number2) {
      return number1 * number2;
    },

    divide(number1, number2) {
      return number1 / number2;
    },
  };
};

module.exports = makeCalculator;
