import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  if(buttonName == "AC") {
    total = '0';
    next = '0';
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
      if(next == '0') {
        next = total;
        total = buttonName;
      }
      else {
        total += buttonName;
      }
    }
  }
  else {
    operation = buttonName;
    let obj = operate(total, next, operation);
  }
  return {total, next, operation};
};

export default calculate;
