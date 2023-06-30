/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
    const stack = [];
    let idx = 0;
    for (let i = 0; i < pushed.length; i += 1) {
        const p = pushed[i];
        stack.push(p);
        while (stack.length > 0 && popped.length > 0 && stack.at(-1) === popped[idx]) {
            stack.pop();
            idx += 1;
        }
    }
    return stack.length === 0;
};

module.exports = { validateStackSequences };
