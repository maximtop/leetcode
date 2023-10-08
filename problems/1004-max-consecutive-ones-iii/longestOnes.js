/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
    let l = 0;
    let maxConsecutive = 0;
    for (let r = 0; r < nums.length; r += 1) {
        k -= (1 - nums[r]);
        if (k < 0) {
            k += (1 - nums[l]);
            l += 1;
        } else {
            maxConsecutive = Math.max(maxConsecutive, r - l + 1);
        }
    }
    return maxConsecutive;
};

module.exports = { longestOnes };
