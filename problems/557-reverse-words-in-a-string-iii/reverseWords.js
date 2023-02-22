/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
    const arr = s.split(' ');
    return arr.map((word) => word.split('').reverse().join('')).join(' ');
};

module.exports = { reverseWords };
