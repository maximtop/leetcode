/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnesBrute = function (nums) {
    let longest = 0;
    for (let left = 0; left < nums.length; left += 1) {
        let zeros = 0;
        for (let right = left; right < nums.length; right += 1) {
            if (nums[right] === 0) {
                zeros += 1;
            }
            if (zeros <= 1) {
                longest = Math.max(longest, right - left + 1);
            }
        }
    }
    return longest;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
    let longest = 0;
    let right = 0;
    let left = 0;
    let zeros = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeros += 1;
        }
        while (zeros > 1 && left <= right) {
            if (nums[left] === 0) {
                zeros -= 1;
            }
            left += 1;
        }

        longest = Math.max(longest, right - left + 1);

        right += 1;
    }

    return longest;
};

module.exports = {
    findMaxConsecutiveOnes: findMaxConsecutiveOnesBrute,
    findMaxConsecutiveOnesBrute,
    findMaxConsecutiveOnesSlide: findMaxConsecutiveOnes,
};
