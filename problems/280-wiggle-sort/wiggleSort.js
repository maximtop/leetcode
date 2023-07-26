/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function (nums) {
    for (let i = 1; i < nums.length; i += 1) {
        if (i % 2 === 0) {
            if (nums[i] > nums[i - 1]) {
                const temp = nums[i - 1];
                nums[i - 1] = nums[i];
                nums[i] = temp;
            }
        } else if (nums[i] < nums[i - 1]) {
            const temp = nums[i - 1];
            nums[i - 1] = nums[i];
            nums[i] = temp;
        }
    }
};

module.exports = { wiggleSort };
