import Big from 'big.js';

const operate = (numberOne, numberTwo, operation)=> {
  const a = numberOne ? Big(numberOne) : null;
  const b = numberTwo ? Big(numberTwo) : null;
  let result  = 0;

  if(operations == '+') {
    result = Big(a.plus(b));
  } 
  else if(operations == '-') {
    result = Big(a.minus(b));
  } 
  else if(operations == 'x') {
    result = Big(a.times(b))
  } 
  else if(operations == '÷') {
    try {
      result = Big(a.div(b))
    }
    catch(e) {
      return "Can't be divided by 0";
    }
  } else if(operations == '%') {
    result = Big(x.div(100))
  }

  return result.toPrecision().toString();
}

export default operate;
