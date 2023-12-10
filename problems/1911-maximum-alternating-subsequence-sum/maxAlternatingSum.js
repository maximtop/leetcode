/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAlternatingSum = function (nums) {
    const dp = new Map();
    const dfs = (i, even) => {
        if (i === nums.length) {
            return 0;
        }
        const key = `${i};${even}`;
        if (dp.has(key)) {
            return dp.get(key);
        }
        const total = even ? nums[i] : -1 * nums[i];
        dp.set(key, Math.max(
            total + dfs(i + 1, !even),
            dfs(i + 1, even),
        ));
        return dp.get(key);
    };
    return dfs(0, true);
};

module.exports = { maxAlternatingSum };
