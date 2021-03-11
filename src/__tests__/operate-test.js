import operate from '../logic/operate';

const a = '1';
const b = '2';

describe('Operator', () => {
  it('returns the sum', () => {
    expect(operate(a, b, '+')).toEqual('3');
  });

  it('returns the sum', () => {
    expect(operate(a, b, '+')).not.toEqual('4');
  });

  it('returns the difference', () => {
    expect(operate(a, b, '-')).toEqual('-1');
  });

  it('returns the difference', () => {
    expect(operate(a, b, '-')).not.toEqual('1');
  });

  it('returns the product', () => {
    expect(operate(a, b, 'x')).toEqual('2');
  });

  it('returns the product', () => {
    expect(operate(a, b, 'x')).not.toEqual('3');
  });

  it('returns the quotient', () => {
    expect(operate(a, b, '÷')).toEqual('0.5');
  });

  it('returns the quotient', () => {
    expect(operate(a, b, '÷')).not.toEqual('1');
  });

  it('returns the quotient', () => {
    expect(operate(a, 0, '÷')).toEqual("Can't be divided by 0");
  });

  it('returns the quotient', () => {
    expect(operate(a, 0, '÷')).not.toEqual('0');
  });
});
