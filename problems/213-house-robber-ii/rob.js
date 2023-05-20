/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    const helper = (nums) => {
        let rob1 = 0;
        let rob2 = 0;
        for (let i = 0; i < nums.length; i += 1) {
            const temp = Math.max(rob1 + nums[i], rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    };
    if (nums.length === 1) {
        return nums[0];
    }
    return Math.max(helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)));
};

module.exports = { rob };
