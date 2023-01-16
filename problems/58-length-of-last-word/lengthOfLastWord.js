/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    const last = s.split(' ')
        .map((str) => str.trim())
        .filter((i) => i)
        .pop();
    return last.length;
};

module.exports = { lengthOfLastWord };
