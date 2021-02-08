import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  if (buttonName === 'AC') {
    total = '0';
    next = '';
    operation = '';
  } else if (buttonName === '.') {
    if (/\./.test(total) === false) total += '.';
  } else if (/\d/.test(buttonName)) {
    if (operation === '') {
      if (total === '0') {
        total = buttonName;
      } else {
        total += buttonName;
      }
    } else if (next === '') {
      next = total;
      total = buttonName;
    } else {
      total += buttonName;
    }
  } else if (buttonName === '+/-') {
    total = operate(total, '-1', 'x');
  } else if (buttonName === '%') {
    total = operate(total, '100', '÷');
  } else if (buttonName !== '=') {
    operation = buttonName;
  } else {
    total = operate(next, total, operation);
  }
  return { total, next, operation };
};

export default calculate;
