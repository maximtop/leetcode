/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = function (nums, target) {
    const dp = new Map();
    const getKey = (i, t) => {
        return `${i}_${t}`;
    };
    const dfs = (i, t) => {
        if (i === nums.length) {
            return t === target ? 1 : 0;
        }
        const key = getKey(i, t);
        if (dp.has(key)) {
            return dp.get(key);
        }
        dp.set(key, dfs(i + 1, t + nums[i]) + dfs(i + 1, t - nums[i]));
        return dp.get(key);
    };
    return dfs(0, 0);
};

module.exports = { findTargetSumWays };
