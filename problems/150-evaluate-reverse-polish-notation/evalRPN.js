/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    const stack = [];
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b),
    };

    for (let i = 0; i < tokens.length; i += 1) {
        const token = tokens[i];
        const func = operators[token];
        if (func) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(func(a, b));
        } else {
            stack.push(parseInt(token, 10));
        }
    }

    return stack.pop();
};

module.exports = { evalRPN };
