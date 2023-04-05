/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
    const set = new Set(nums);
    let longest = 0;
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        if (!set.has(num - 1)) {
            let len = 0;
            while (set.has(num + len)) {
                len += 1;
            }
            longest = len > longest ? len : longest;
        }
    }
    return longest;
};

module.exports = { longestConsecutive };
