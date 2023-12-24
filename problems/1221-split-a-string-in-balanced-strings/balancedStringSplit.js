/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function (s) {
    const stack = [];
    let count = 0;
    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        if (stack.length > 0 && stack.at(-1) !== char) {
            stack.pop();
        } else {
            stack.push(char);
        }
        if (stack.length === 0) {
            count += 1;
        }
    }
    return count;
};

module.exports = { balancedStringSplit };
