/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    const map = {};
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        map[num] = (map[num] ?? 0) + 1;
    }
    for (let key of Object.keys(map)) {
        if (map[key] > nums.length / 2) {
            return key;
        }
    }
};

module.exports = { majorityElement };
