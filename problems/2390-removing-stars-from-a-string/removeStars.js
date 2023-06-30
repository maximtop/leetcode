/**
 * @param {string} s
 * @return {string}
 */
const removeStars = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        if (char === '*') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};

module.exports = { removeStars };
