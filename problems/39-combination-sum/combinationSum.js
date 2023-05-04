/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
    const res = [];

    const dfs = (i, curr, total) => {
        if (total === target) {
            res.push([...curr]);
            return;
        }

        if (i >= candidates.length || total > target) {
            return;
        }

        curr.push(candidates[i]);
        dfs(i, curr, total + candidates[i]);

        curr.pop();
        dfs(i + 1, curr, total);
    };

    dfs(0, [], 0);

    return res;
};

module.exports = { combinationSum };
