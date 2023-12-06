/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const countPairs = function (nums, target) {
    let counter = 0;
    for (let i = 0; i < nums.length - 1; i += 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            if (nums[i] + nums[j] < target) {
                counter += 1;
            }
        }
    }
    return counter;
};

module.exports = { countPairs };
