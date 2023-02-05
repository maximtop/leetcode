/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function (nums) {
    const map = {};
    const sorted = [...nums].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i += 1) {
        if (sorted[i] !== sorted[i - 1]) {
            map[sorted[i]] = i;
        }
    }
    const result = [];
    for (let i = 0; i < nums.length; i += 1) {
        result.push(map[nums[i]]);
    }
    return result;
};

module.exports = { smallerNumbersThanCurrent };
