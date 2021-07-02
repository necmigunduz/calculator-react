import calculate from '../logic/calculate';

describe('calculate', () => {
  it('constructs the (total) number as user type a number', () => {
    let data = { total: '', next: '', operation: '' };
    data = calculate(data, '1');
    expect(data.total).toBe('1');
    data = calculate(data, '2');
    expect(data.total).toBe('12');
    data = calculate(data, '3');
    expect(data.total).toBe('123');
  });

  it('constructs the (total) number as user type a number', () => {
    let data = { total: '345', next: '', operation: '' };
    data = calculate(data, '1');
    expect(data.total).toBe('3451');
  });

  it('constructs the (next)number as you type if you pressed an operation button', () => {
    let data = { total: '123', next: '', operation: '+' };
    data = calculate(data, '8');
    expect(data.next).toBe('8');
    data = calculate(data, '.');
    expect(data.next).toBe('8.');
    data = calculate(data, '2');
    expect(data.next).toBe('8.2');
  });

  it('constructs the (next)number as you type if you pressed an operation button', () => {
    let data = { total: '123', next: '', operation: '' };
    data = calculate(data, '+');
    expect(data.operation).toBe('+');
  });

  it('constructs the (next)number as you type if you pressed an operation button', () => {
    let data = { total: '12', next: '3', operation: '+' };
    data = calculate(data, '=');
    expect(data.total).toBe('15');
  });

  it('constructs the (next)number as you type if you pressed an operation button', () => {
    let data = { total: '', next: '3', operation: '' };
    data = calculate(data, '.');
    data = calculate(data, '2');
    expect(data.next).toBe('3.2');
  });
});
