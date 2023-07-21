/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
    let curSum = 0;
    let res = 0;
    const prefixes = new Map([[0, 1]]);
    for (let i = 0; i < nums.length; i += 1) {
        const n = nums[i];
        curSum += n;
        const diff = curSum - k;
        res += prefixes.get(diff) || 0;
        prefixes.set(curSum, 1 + (prefixes.get(curSum) || 0));
    }
    return res;
};

module.exports = { subarraySum };
