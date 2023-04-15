/**
 * @param {number[]} nums
 * @return {number}
 */
const differenceOfSum = function (nums) {
    let elSum = 0;
    let digSum = 0;

    const getDigSum = (num) => {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    for (let i = 0; i < nums.length; i += 1) {
        elSum += nums[i];
        digSum += getDigSum(nums[i]);
    }

    return Math.abs(elSum - digSum);
};

module.exports = { differenceOfSum };
