/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    let sum = n;
    const map = {};
    while (sum !== 1 && !map[sum]) {
        const newSum = String(sum).split('').map((el) => el ** 2).reduce((a, b) => a + b);
        map[sum] = newSum;
        sum = newSum;
    }
    return sum === 1;
};

module.exports = { isHappy };
