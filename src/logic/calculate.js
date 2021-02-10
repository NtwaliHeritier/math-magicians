import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  if (buttonName === 'AC') {
    total = '0';
    next = '0';
    operation = '';
  } else if (buttonName === '.') {
    if (/\./.test(total) === false) total += '.';
  } else if (/\d/.test(buttonName)) {
    if (total === '0' || total === next) {
      total = buttonName;
    } else {
      total += buttonName;
    }
  } else if (buttonName === '+/-') {
    total = operate(total, '-1', 'x');
  } else if (buttonName === '%') {
    total = operate(total, '100', '÷');
  } else if (buttonName !== '=') {
    if (next === '0') {
      next = total;
      operation = buttonName;
    } else {
      total = (operation === 'x' || operation === '÷') && (next === '0') ? operate(total, '1', operation) : operate(next, total, operation);
      next = total;
      operation = buttonName;
    }
  } else {
    total = operate(next, total, operation);
    next = '0';
  }
  return { total, next, operation };
};

export default calculate;
