/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    let product = 1;
    let zeroCounter = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === 0) {
            zeroCounter += 1;
        } else {
            product *= nums[i];
        }
    }
    const result = [];
    for (let i = 0; i < nums.length; i += 1) {
        if (zeroCounter === 0) {
            result[i] = product / nums[i];
        } else if (zeroCounter > 1) {
            result[i] = 0;
        } else if (nums[i] === 0) {
            result[i] = product;
        } else {
            result[i] = 0;
        }
    }
    return result;
};

module.exports = { productExceptSelf };
