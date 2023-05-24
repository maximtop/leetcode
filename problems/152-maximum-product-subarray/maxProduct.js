/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
    let max = Math.max(...nums);
    let curMin = 1;
    let curMax = 1;
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        if (num === 0) {
            curMin = 1;
            curMax = 1;
            continue;
        }
        const minProd = curMin * num;
        const maxProd = curMax * num;
        curMax = Math.max(maxProd, minProd, num);
        curMin = Math.min(minProd, maxProd, num);
        max = Math.max(curMax, max);
    }
    return max;
};

module.exports = { maxProduct };
