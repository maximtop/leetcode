/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return         -1 if num is higher than the picked number
 *                  1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n, guess) {
    let left = 1;
    let right = n;
    while (left <= right) {
        const mid = left + (Math.floor((right - left) / 2));
        if (guess(mid) === 0) {
            return mid;
        }
        // mid > pick
        if (guess(mid) === -1) {
            right = mid - 1;
        // mid < pick
        } else if (guess(mid) === 1) {
            left = mid + 1;
        }
    }
    return -1;
};

const getGuessFn = (guessed) => (n) => {
    if (guessed === n) {
        return 0;
    }
    if (n > guessed) {
        return -1;
    }
    return 1;
};

module.exports = { guessNumber, getGuessFn };
