/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
    let goal = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i -= 1) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }
    return goal === 0;
};

module.exports = { canJump };
