/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
    const uniqNums = [...new Set(nums)];
    uniqNums.sort((a, b) => b - a);
    if (uniqNums.length > 2) {
        return uniqNums[2];
    }

    return uniqNums[0];
};

module.exports = { thirdMax };
