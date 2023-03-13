/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
    const helper = (x, n) => {
        if (n === 0) {
            return 1;
        }

        const half = helper(x, Math.floor(n / 2));

        if (n % 2 === 0) {
            return half * half;
        }
        return half * half * x;
    };

    if (n < 0) {
        return 1 / helper(x, -n);
    }
    return helper(x, n);
};

module.exports = { myPow };
