/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function (s, t) {
    const dp = new Array(t.length).fill(0);
    for (let i = s.length - 1; i >= 0; i -= 1) {
        let prev = 1;
        for (let j = t.length - 1; j >= 0; j -= 1) {
            const oldJ = dp[j];
            if (s[i] === t[j]) {
                dp[j] += prev;
            }
            prev = oldJ;
        }
    }
    return dp[0];
};

module.exports = { numDistinctDynamic: numDistinct };
