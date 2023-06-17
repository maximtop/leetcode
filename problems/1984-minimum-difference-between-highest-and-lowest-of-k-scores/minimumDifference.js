/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function (nums, k) {
    const sortedNums = nums.sort((a, b) => a - b);
    let l = 0;
    let r = k - 1;
    let res = Number.POSITIVE_INFINITY;
    while (r < sortedNums.length) {
        res = Math.min(res, sortedNums[r] - sortedNums[l]);
        l += 1;
        r += 1;
    }
    return res;
};

module.exports = { minimumDifference };
