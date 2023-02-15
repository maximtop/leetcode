/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((a, b) => a + b);

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        rightSum -= num;
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += num;
    }

    return -1;
};

module.exports = { pivotIndex };
