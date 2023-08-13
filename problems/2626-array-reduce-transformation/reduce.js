/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function (nums, fn, init) {
    let res = init;
    for (let i = 0; i < nums.length; i += 1) {
        res = fn(res, nums[i]);
    }
    return res;
};

module.exports = { reduce };
