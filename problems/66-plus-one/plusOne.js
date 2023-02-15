/* eslint-disable no-param-reassign,no-shadow */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    const sum = digits[digits.length - 1] + 1;
    digits[digits.length - 1] = sum % 10;
    let carryOn = Math.floor(sum / 10);
    if (!carryOn) {
        return digits;
    }
    for (let i = digits.length - 2; i >= 0; i -= 1) {
        const sum = digits[i] + carryOn;
        carryOn = Math.floor(sum / 10);
        digits[i] = sum % 10;
        if (!carryOn) {
            break;
        }
    }
    if (carryOn) {
        digits.unshift(carryOn);
    }
    return digits;
};

module.exports = { plusOne };
