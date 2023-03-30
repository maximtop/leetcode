/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function (nums, index) {
    let target = [];
    for (let i = 0; i < nums.length; i += 1) {
        const idx = index[i];
        target = [...target.slice(0, idx), nums[i], ...target.slice(idx)];
        target[index[i]] = nums[i];
    }
    return target;
};

module.exports = { createTargetArray };
