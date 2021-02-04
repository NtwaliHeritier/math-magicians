import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const a = numberOne ? Big(numberOne) : null;
  const b = numberTwo ? Big(numberTwo) : null;
  let result = 0;

  if (operation === '+') {
    result = Big(a.plus(b));
  } else if (operation === '-') {
    result = Big(a.minus(b));
  } else if (operation === 'x') {
    result = Big(a.times(b));
  } else if (operation === '÷') {
    try {
      result = Big(a.div(b));
    } catch (e) {
      return "Can't be divided by 0";
    }
  } else if (operation === '%') {
    result = Big(a.div(100));
  }

  return result.toPrecision().toString();
};

export default operate;
