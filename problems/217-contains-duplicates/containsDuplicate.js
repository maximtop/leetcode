/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    let valMap = new Map();

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        const existing = valMap.get(num)
        if (existing) {
            return true;
        }
        valMap.set(num, true);
    }

    return false;
};


module.exports = { containsDuplicate };
