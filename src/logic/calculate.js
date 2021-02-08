import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  if(buttonName == "AC") {
    total = '0';
    next = '';
    operation = '';
   }
   else if(buttonName == ".") {
      total += '.'; 
  }
  else if(/\d/.test(buttonName)) {
    if(operation == '') {
      total == '0' ? total = buttonName : total += buttonName;
    }
    else {
      if(next == '') {
        next = total;
        total = buttonName;
      }
      else {
        total += buttonName;
      }
    }
  }
  else {
    if(buttonName !== '=') {
    operation = buttonName;
    }
    else {
    total = operate(next, total, operation)
    }
  }
  return {total, next, operation};
};

export default calculate;
