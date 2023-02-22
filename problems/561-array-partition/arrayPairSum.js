/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
    const sortedNums = nums.sort((a, b) => a - b);

    let sum = 0;
    for (let i = 0, j = 1; j < sortedNums.length; i += 2, j += 2) {
        const min = Math.min(sortedNums[i], sortedNums[j]);
        sum += min;
    }
    return sum;
};

module.exports = { arrayPairSum };
