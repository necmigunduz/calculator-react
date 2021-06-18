import operate from './operate';

export default function calculate(data, buttonName) {
    let { total, next, operation } = data;
    switch(buttonName) {
        case '%':
            if (next) {
                total = operate(total, next, operation);
                total = operate(total, '100', '/');
                next = null;
                total = null;
            } else {
                total = operate(total, '100', '/');
            }
            break;
        case '=':
            if(next) {
                total = operate(total, next, operation);
                next = null;
                total = null;
            }
            break;
        case '+/-'
            if(next) {
                next = operate(next, '-1', '*')
            } else {
                total = operate(total, '-1', '*')
            }
            break;
        case 'AC'
            if(next) {
                next = '0';
            } else if(operation) {
                operation = null;
            } else {
                total = '0';
            }
            break;
        case '.'
            if(next) {
                if(!next.includes('.')){
                    next += '.';
                }
            } else if(operation) {
                next = '0.';
            } else if(!total.includes('.')) {
                total += '.';
            }
            break;

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if(next) {
                next += buttonName;
            } else if(operation) {
                next = buttonName;
            } else if(total==='0') {
                total = buttonName;
            } else {
                total += buttonName;
            }
            break;
        default: 
            total = operate(total, next, operation);
            next = null;
            operation = buttonName;
            break;
    }
    return { total, next, operation}
}