/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
    const res = [];

    const subset = [];
    const dfs = (i) => {
        if (i > nums.length - 1) {
            res.push([...subset]);
            return;
        }

        // add number
        subset.push(nums[i]);
        dfs(i + 1);
        // do not add number
        subset.pop();
        dfs(i + 1);
    };

    dfs(0);
    return res;
};

module.exports = { subsets };
