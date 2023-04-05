/* eslint-disable no-continue */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    const sorted = nums.sort((a, b) => a - b);

    const result = [];
    for (let first = 0; first < sorted.length; first += 1) {
        if (first > 0 && sorted[first] === sorted[first - 1]) {
            continue;
        }
        let start = first + 1;
        let end = sorted.length - 1;
        while (start < end) {
            const sum = sorted[first] + sorted[start] + sorted[end];
            if (sum > 0) {
                end -= 1;
            } else if (sum < 0) {
                start += 1;
            } else {
                result.push([sorted[first], sorted[start], sorted[end]]);
                start += 1;
                while (sorted[start] === sorted[start - 1]) {
                    start += 1;
                }
            }
        }
    }
    return result;
};

module.exports = { threeSum };
