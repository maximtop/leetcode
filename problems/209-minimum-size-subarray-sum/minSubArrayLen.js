/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLength = 0;
    while (right < nums.length) {
        sum += nums[right];

        while (sum >= target) {
            const len = right + 1 - left;
            if (minLength === 0 || len < minLength) {
                minLength = len;
            }
            sum -= nums[left];
            left += 1;
        }

        right += 1;
    }

    return minLength;
};

module.exports = { minSubArrayLen };
