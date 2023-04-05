/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    const stack = [];
    const result = [];

    const backtrack = (openCount, closeCount) => {
        if (openCount === closeCount && openCount === n) {
            result.push(stack.join(''));
            return;
        }
        if (openCount < n) {
            stack.push('(');
            backtrack(openCount + 1, closeCount);
            stack.pop();
        }
        if (closeCount < openCount) {
            stack.push(')');
            backtrack(openCount, closeCount + 1);
            stack.pop();
        }
    };

    backtrack(0, 0);
    return result;
};

module.exports = { generateParenthesis };
