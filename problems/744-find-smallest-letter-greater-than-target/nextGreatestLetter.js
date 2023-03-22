/* eslint-disable no-bitwise */
/**
 * @param {string[]} letters
 * @param {string} target
 * @return {string}
 */
const nextGreatestLetter = function (letters, target) {
    if (letters[0] > target) {
        return letters[0];
    }

    let left = 0;
    let right = letters.length - 1;

    while (left < right) {
        const pivot = left + ((right - left) >> 1);
        const char = letters[pivot];
        if (char <= target) {
            left = pivot + 1;
        } else {
            right = pivot;
        }
    }
    return letters[left % letters.length];
};

module.exports = { nextGreatestLetter };
