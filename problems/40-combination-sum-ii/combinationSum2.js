/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
    const sortedCandidates = candidates.sort((a, b) => a - b);
    const result = [];

    const dfs = (i, subset, sum) => {
        if (sum === target) {
            result.push([...subset]);
            return;
        }

        if (i >= sortedCandidates.length || sum > target) {
            return;
        }

        // path to include
        subset.push(sortedCandidates[i]);
        sum += sortedCandidates[i];
        dfs(i + 1, subset, sum);

        // path not to include;
        subset.pop();
        sum -= sortedCandidates[i];
        while (sortedCandidates[i + 1] === sortedCandidates[i]) {
            i += 1;
        }
        dfs(i + 1, subset, sum);
    };

    dfs(0, [], 0);

    return result;
};

module.exports = { combinationSum2 };
