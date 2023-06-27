/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function (operations) {
    const stack = [];
    for (let i = 0; i < operations.length; i += 1) {
        const operation = operations[i];
        if (operation === '+') {
            stack.push(stack.at(-1) + stack.at(-2));
        } else if (operation === 'C') {
            stack.pop();
        } else if (operation === 'D') {
            stack.push(stack.at(-1) * 2);
        } else {
            stack.push(Number(operation));
        }
    }
    return stack.reduce((acc, el) => acc + el, 0);
};

module.exports = { calPoints };
