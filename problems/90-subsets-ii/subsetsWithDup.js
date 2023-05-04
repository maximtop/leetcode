/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    const dfs = (i, subset) => {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }
        // choose to add
        subset.push(nums[i]);
        dfs(i + 1, subset);
        subset.pop(nums[i]);

        // choose not to add
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i += 1;
        }
        dfs(i + 1, subset);
    };

    dfs(0, []);
    return res;
};

module.exports = { subsetsWithDup };
