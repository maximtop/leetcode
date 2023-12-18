/**
 * @param {number[]} nums
 * @return {number}
 */
const maxCoins = function (nums) {
    const dp = Array.from(Array(nums.length + 1), () => Array(nums.length + 1).fill(null));
    nums = [1, ...nums, 1];
    const dfs = (l, r) => {
        if (l > r) {
            return 0;
        }
        if (dp[l][r] !== null) {
            return dp[l][r];
        }
        dp[l][r] = 0;
        for (let i = l; i <= r; i += 1) {
            let coins = nums[l - 1] * nums[i] * nums[r + 1];
            coins += dfs(l, i - 1) + dfs(i + 1, r);
            dp[l][r] = Math.max(dp[l][r], coins);
        }
        return dp[l][r];
    };

    return dfs(1, nums.length - 2);
};

module.exports = { maxCoins };
