/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
    const count = nums.reduce((acc, n) => {
        acc[n] ??= 0;
        acc[n] += 1;
        return acc;
    }, {});
    nums = [...new Set(nums)].sort((a, b) => a - b);
    let earn1 = 0;
    let earn2 = 0;
    for (let i = 0; i < nums.length; i += 1) {
        const curEarn = nums[i] * count[nums[i]];
        if (i > 0 && nums[i] === nums[i - 1] + 1) {
            const temp = earn2;
            earn2 = Math.max(curEarn + earn1, earn2);
            earn1 = temp;
        } else {
            const temp = earn2;
            earn2 = curEarn + earn2;
            earn1 = temp;
        }
    }
    return earn2;
};

module.exports = { deleteAndEarn };
