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
    if ((operation === '' && next === '0') || operation !== '') {
      if (total === '0') {
        total = buttonName;
      } else {
        total += buttonName;
      }
    } else if (next === '0') {
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
    if (next === '0') {
      next = total;
    } else {
      next = operate(next, total, operation);
    }
    total = '0';
  } else {
    total = operate(next, total, operation);
    next = '0';
  }
  return { total, next, operation };
};

export default calculate;
