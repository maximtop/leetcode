/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    const cache = new Map();
    const helper = (n) => {
        if (cache.has(n)) {
            return cache.get(n);
        }
        if (n <= 2) {
            return n;
        }
        const res = helper(n - 1) + helper(n - 2);
        cache.set(n, res);
        return res;
    };
    return helper(n);
};

module.exports = { climbStairs };
