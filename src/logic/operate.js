import Big from 'big.js';

export default function operate(previous, next, operation) {
  const prev = Big(previous);
  const nxt = Big(next);

  let value;

  if (operation === '+') {
    value = prev.plus(nxt);
  }

  if (operation === '-') {
    value = prev.minus(nxt);
  }

  if (operation === '/') {
    value = prev.div(nxt);
  }

  if (operation) {
    value = prev.mod(nxt);
  }

  return value.toString();
}
