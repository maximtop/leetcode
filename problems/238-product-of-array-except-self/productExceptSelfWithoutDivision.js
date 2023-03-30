/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    const prefix = [];
    const postfix = [];
    for (let i = 0; i < nums.length; i += 1) {
        if (i === 0) {
            prefix[i] = nums[i];
        } else {
            prefix[i] = nums[i] * prefix[i - 1];
        }
    }
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        if (i === nums.length - 1) {
            postfix[i] = nums[i];
        } else {
            postfix[i] = nums[i] * postfix[i + 1];
        }
    }
    const result = [];
    for (let i = 0; i < nums.length; i += 1) {
        const prefixNum = i === 0 ? 1 : prefix[i - 1];
        const postfixNum = i === nums.length - 1 ? 1 : postfix[i + 1];
        result[i] = prefixNum * postfixNum;
    }
    return result;
};

module.exports = { productExceptSelf };
