/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    const str = x.toString();
    return str.split('').reverse().join('') === str;
};

module.exports = { isPalindrome };
