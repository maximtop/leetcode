/* eslint-disable no-bitwise */
const mySqrt = (num) => {
    if (num < 2) {
        return num;
    }

    let left = 2;
    let right = num >> 1;

    while (left <= right) {
        const pivot = left + ((right - left) >> 1);
        if (pivot ** 2 === num) {
            return pivot;
        }
        if (pivot ** 2 < num) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return right;
};

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
    const sqrt = mySqrt(num);

    return sqrt ** 2 === num;
};

module.exports = { isPerfectSquare, mySqrt };
