/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let l = 0;
    for (let r = 0; r < nums.length; r += 1) {
        if (nums[r]) {
            const temp = nums[r];
            nums[r] = nums[l];
            nums[l] = temp;
            l += 1;
        }
    }
};

module.exports = { moveZeroes };
