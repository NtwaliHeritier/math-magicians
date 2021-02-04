import operate from "./operate";

const calculate = (data, buttonName) => {
  const {total, next, operation} = data;
  if(buttonName == 'AC') {
    total = 0;
    next = '';
    operation = '';
  }
  else if(buttonName == "+/-") {
    total = operate(total, -1, 'x');
  }
  else {
    total = operate(total, next, operation);
  }
  const newObj = {total, next, operation};
  return newObj;
}

export default calculate;