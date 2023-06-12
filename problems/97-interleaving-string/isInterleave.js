/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    const dp = Array(s1.length + 1).fill()
        .map(() => Array(s2.length + 1)
            .fill(false));
    dp[s1.length][s2.length] = true;
    for (let i = s1.length; i >= 0; i -= 1) {
        for (let j = s2.length; j >= 0; j -= 1) {
            if (i < s1.length && s1[i] === s3[i + j] && dp[i + 1][j]) {
                dp[i][j] = true;
            }
            if (j < s2.length && s2[j] === s3[i + j] && dp[i][j + 1]) {
                dp[i][j] = true;
            }
        }
    }
    return dp[0][0];
};

module.exports = { isInterleave };
