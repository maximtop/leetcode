/* eslint-disable */
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
    const dp = Array.from(Array(text1.length + 1),
        (_) => Array(text2.length + 1).fill(0));

    for (let i = text1.length - 1; i >= 0; i -= 1) {
        for (let j = text2.length - 1; j >= 0; j -= 1) {
            if (text1[i] === text2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
            }
        }
    }

    return dp[0][0];
};

module.exports = { longestCommonSubsequence };
