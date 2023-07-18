/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
    const bucket = new Array(3).fill(0);
    for (let i = 0; i < nums.length; i += 1) {
        bucket[nums[i]] += 1;
    }

    let count = 0;
    for (let i = 0; i < bucket.length; i += 1) {
        while (bucket[i] > 0) {
            nums[count] = i;
            bucket[i] -= 1;
            count += 1;
        }
    }
};

module.exports = { sortColors };
