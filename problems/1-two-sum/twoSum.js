/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        const needed = target - num;
        if (map.has(needed)) {
            return [map.get(needed), i];
        }
        map.set(num, i);
    }
};

module.exports = { twoSum }
