/**
 * @param {number[]} nums
 * @return {boolean}
 */
const validPartition = function (nums) {
    const two = nums.at(-1) === nums.at(-2);
    if (nums.length === 2) {
        return two;
    }
    const three = (nums.at(-1) === nums.at(-2) && nums.at(-2) === nums.at(-3))
        || (nums.at(-2) === nums.at(-3) + 1 && nums.at(-2) === nums.at(-1) - 1);
    let dp = [three, two, false];
    for (let i = nums.length - 4; i >= 0; i -= 1) {
        let cur = nums[i] === nums[i + 1] && dp[1];
        cur = cur
            || (((nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2])
            || (nums[i] + 1 === nums[i + 1] && nums[i + 1] === nums[i + 2] - 1)) && dp[2]);
        dp = [cur, dp[0], dp[1]];
    }
    return dp[0];
};

module.exports = { validPartition };
