/**
 * @param {string[]} nums
 * @return {string}
 */
const findDifferentBinaryString = function (nums) {
    const l = nums[0].length;
    const numsSet = new Set(nums);
    const dfs = (cur) => {
        if (cur.length === l) {
            if (!numsSet.has(cur)) {
                return cur;
            }
            return false;
        }
        for (const char of ['0', '1']) {
            const res = dfs(cur + char);
            if (res) {
                return res;
            }
        }
    };
    return dfs('');
};

module.exports = { findDifferentBinaryString };
