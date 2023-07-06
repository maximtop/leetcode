/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = function (s, k) {
    const stack = [];
    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        if (stack.length > 0 && stack.at(-1)[0] === char) {
            stack.at(-1)[1] += 1;
        } else {
            stack.push([char, 1]);
        }
        while (stack.length > 0 && stack.at(-1)[1] === k) {
            stack.pop();
        }
    }

    const newStr = stack.map(([char, count]) => {
        return new Array(count).fill(char).join('');
    }).join('');

    return newStr;
};

module.exports = { removeDuplicates };
