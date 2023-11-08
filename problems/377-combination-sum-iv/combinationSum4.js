/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function (nums, target) {
    const dp = { 0: 1 };
    for (let total = 1; total < target + 1; total += 1) {
        dp[total] = 0;
        for (const n of nums) {
            dp[total] += dp[total - n] ?? 0;
        }
    }
    return dp[target];
};

module.exports = { combinationSum4 };
