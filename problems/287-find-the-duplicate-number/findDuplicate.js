/* eslint-disable no-bitwise,no-restricted-syntax */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
    let left = 1;
    let right = nums.length;

    let duplicate;
    while (left <= right) {
        const cur = left + ((right - left) >> 1);
        let counter = 0;
        for (const num of nums) {
            if (num <= cur) {
                counter += 1;
            }
        }
        if (counter <= cur) {
            left = cur + 1;
        } else {
            duplicate = cur;
            right = cur - 1;
        }
    }
    return duplicate;
};

module.exports = { findDuplicate };
