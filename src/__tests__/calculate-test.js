import calculate from '../logic/calculate';

const data = { total: '1', next: '0', operation: '' };

describe('Calculator', () => {
  it('tests AC', () => {
    expect(calculate(data, 'AC')).toEqual({ total: '0', next: '0', operation: '' });
  });

  it('tests AC', () => {
    expect(calculate(data, 'AC')).not.toEqual({ total: '0', next: '0', operation: '+' });
  });

  it('tests .', () => {
    expect(calculate(data, '.')).toEqual({ total: '1.', next: '0', operation: '' });
  });

  it('tests .', () => {
    expect(calculate(data, '.')).not.toEqual({ total: '1.', next: '1', operation: '' });
  });

  it('tests +/-', () => {
    expect(calculate(data, '+/-')).toEqual({ total: '-1', next: '0', operation: '' });
  });

  it('tests +/-', () => {
    expect(calculate(data, '+/-')).not.toEqual({ total: '1', next: '0', operation: '' });
  });

  it('tests %', () => {
    expect(calculate(data, '%')).toEqual({ total: '0.01', next: '0', operation: '' });
  });

  it('tests %', () => {
    expect(calculate(data, '%')).not.toEqual({ total: '0', next: '0', operation: '' });
  });

  it('tests +', () => {
    expect(calculate({ total: '1', next: '2', operation: '+' }, '=')).toEqual({ total: '3', next: '0', operation: '+' });
  });

   it('tests +', () => {
    expect(calculate({ total: '1', next: '2', operation: '+' }, '=')).not.toEqual({ total: '3', next: '0', operation: 'x' });
  });

  it('tests -', () => {
    expect(calculate({ total: '1', next: '2', operation: '-' }, '=')).toEqual({ total: '1', next: '0', operation: '-' });
  });

  it('tests -', () => {
    expect(calculate({ total: '1', next: '2', operation: '-' }, '=')).not.toEqual({ total: '0', next: '0', operation: '-' });
  });

  it('tests x', () => {
    expect(calculate({ total: '1', next: '2', operation: 'x' }, '=')).toEqual({ total: '2', next: '0', operation: 'x' });
  });

  it('tests x', () => {
    expect(calculate({ total: '1', next: '2', operation: 'x' }, '=')).not.toEqual({ total: '5', next: '0', operation: 'x' });
  });
});
