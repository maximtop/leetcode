/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    let guess = 1;
    while (guess * guess < x) {
        guess += 1;
    }
    if (guess * guess > x) {
        guess -= 1;
    }

    return guess;
};

module.exports = { mySqrt };
