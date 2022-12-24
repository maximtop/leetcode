/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
    const result = [];
    const set = new Set()
    nums.forEach(num => set.add(num))
    for (let i = 1; i < nums.length + 1; i += 1) {
        if (!set.has(i)) {
            result.push(i)
        }
    }
    return result;
};

module.exports = { findDisappearedNumbers };
