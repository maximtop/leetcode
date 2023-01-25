/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
    const result = [];
    let left = 0;
    let right = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i -= 1) {
        let toSquare;
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            toSquare = nums[left];
            left += 1;
        } else {
            toSquare = nums[right];
            right -= 1;
        }
        result[i] = toSquare * toSquare;
    }

    return result;
};

module.exports = { sortedSquares };
