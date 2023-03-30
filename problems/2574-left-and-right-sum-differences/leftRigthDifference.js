/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRigthDifference = function (nums) {
    let leftSum = 0;
    let rightSum = 0;
    const resultArr = [];
    for (let i = 0; i < nums.length; i += 1) {
        resultArr.push(leftSum);
        leftSum += nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        resultArr[i] = Math.abs(resultArr[i] - rightSum);
        rightSum += nums[i];
    }

    return resultArr;
};

module.exports = { leftRigthDifference };
