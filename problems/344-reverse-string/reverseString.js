/* eslint-disable no-param-reassign */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        const temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start += 1;
        end -= 1;
    }

    return s;
};

module.exports = { reverseString };
