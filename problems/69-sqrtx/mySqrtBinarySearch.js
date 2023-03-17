/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    if (x < 2) {
        return x;
    }
    let left = 2;
    let right = Math.floor(x / 2);
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const squaredMid = mid * mid;
        if (squaredMid === x) {
            return mid;
        }
        if (squaredMid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};

module.exports = { mySqrt };
