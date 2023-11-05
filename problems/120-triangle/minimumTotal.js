/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
    const dp = Array(triangle.length + 1).fill(0);
    for (let i = triangle.length - 1; i >= 0; i -= 1) {
        const arr = triangle[i];
        for (let j = 0; j < arr.length; j += 1) {
            dp[j] = arr[j] + Math.min(dp[j], dp[j + 1]);
        }
    }
    return dp[0];
};

module.exports = { minimumTotal };
