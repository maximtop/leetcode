/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i += 1) {
        const newIndex = (i + k) % nums.length;
        map.set(newIndex, nums[newIndex]);
        nums[newIndex] = map.has(i) ? map.get(i) : nums[i];
    }
};

/**
 * This solutions uses an array
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateExtra = function (nums, k) {
    const result = [];
    for (let i = 0; i < nums.length; i += 1) {
        const newIndex = (i + k) % nums.length;
        result[newIndex] = nums[i];
    }
    for (let i = 0; i < result.length; i += 1) {
        nums[i] = result[i];
    }
};

module.exports = { rotate, rotateExtra };
