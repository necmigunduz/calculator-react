import Big from 'big.js';

export default function operate(previous, next, operation) {
  const prev = Big(previous);
  const nxt = Big(next);
  let value;

  switch (operation) {
    case '+':
      value = prev.plus(nxt);
      break;
    case '-':
      value = prev.minus(nxt);
      break;
    case 'X':
      value = prev.times(nxt);
      break;
    case '%':
      value = prev.mod(nxt);
      break;
    case '/':
      value = prev.div(nxt);
      break;
    case '=':
      value = prev;
      break;
    default:
      value = 0;
  }
  return value.toString;
}
