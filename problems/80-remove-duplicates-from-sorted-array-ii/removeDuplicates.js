/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let l = 0;
    let r = 0;
    while (r < nums.length) {
        let count = 1;
        while (r + 1 < nums.length && nums[r] === nums[r + 1]) {
            r += 1;
            count += 1;
        }
        for (let i = 0; i < Math.min(count, 2); i += 1) {
            nums[l] = nums[r];
            l += 1;
        }
        r += 1;
    }
    return l;
};

module.exports = { removeDuplicates };
