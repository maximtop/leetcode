/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = function (nums) {
    const stack = [];
    let curMin = nums[0];
    for (let i = 1; i < nums.length; i += 1) {
        const n = nums[i];
        while (stack.length > 0 && n >= stack.at(-1)[0]) {
            stack.pop();
        }
        if (stack.length > 0 && n < stack.at(-1)[0] && n > stack.at(-1)[1]) {
            return true;
        }
        curMin = Math.min(n, curMin);
        stack.push([n, curMin]);
    }
    return false;
};

module.exports = { find132pattern };
