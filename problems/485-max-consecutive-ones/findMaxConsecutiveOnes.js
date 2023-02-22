/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let counter = 0;
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        if (num !== 1) {
            if (counter > max) {
                max = counter;
            }
            counter = 0;
        } else if (num === 1) {
            counter += 1;
        }
    }
    if (counter > max) {
        max = counter;
    }

    return max;
};

module.exports = { findMaxConsecutiveOnes };
