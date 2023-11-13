/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function (nums) {
    let lenLIS = 0;
    let res = 0;
    const dp = {};

    for (let i = nums.length - 1; i >= 0; i -= 1) {
        let maxLIS = 1;
        let maxCount = 1;
        for (let j = i + 1; j < nums.length; j += 1) {
            if (nums[j] > nums[i]) {
                const [curLIS, curCount] = dp[j];
                if (curLIS + 1 > maxLIS) {
                    maxLIS = curLIS + 1;
                    maxCount = curCount;
                } else if (curLIS + 1 === maxLIS) {
                    maxCount += curCount;
                }
            }
        }
        if (maxLIS > lenLIS) {
            lenLIS = maxLIS;
            res = maxCount;
        } else if (maxLIS === lenLIS) {
            res += maxCount;
        }
        dp[i] = [maxLIS, maxCount];
    }

    return res;
};

module.exports = { findNumberOfLIS };
