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
    case '*':
      value = prev.times(nxt);
      break;
    case '%':
      value = prev.mod(nxt);
      break;
    case '/':
      if (String(nxt) !== '0') {
        value = prev.div(nxt);
      } else {
        value = '';
      }
      break;
    case '=':
      value = prev;
      break;
    default:
      value = 0;
  }
  return value.toString();
}
