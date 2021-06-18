import Big from 'big.js';

export default function operate(previous, next, operation) {
    const previous = Big(previous);
    const next = Big(next);

    let value;

    if (operation === '+') {
        value = previous.plus(next);
    }

    if (operation === '-') {
        value = previous.minus(next);
    }

    if (operation === '/') {
        value = previous.div(next);
    }

    if (operation) {
        value = previous.mod(next)
    }

    return value.toString()
}