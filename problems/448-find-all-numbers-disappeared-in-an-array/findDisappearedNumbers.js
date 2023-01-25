/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
    const result = [];
    for (let i = 1; i <= nums.length; i += 1) {
        if (!nums.includes(i)) {
            result.push(i);
        }
    }
    return result;
};

module.exports = { findDisappearedNumbers };
